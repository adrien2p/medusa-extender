// TODO fix the fact that medusa is using babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Order as MedusaOrder } from '@medusajs/medusa/dist';
import { OrderRepository as MedusaOrderRepository } from '@medusajs/medusa/dist/repositories/order';
import { overriddenRepositoriesLoader, repositoriesLoader } from '../repository.loader';
import { createContainer } from 'awilix';
import { Repository } from 'typeorm';
import { MedusaUtils } from '../../index';
import { Injectable } from '../../decorators/injectable.decorator';
import { Module } from '../../decorators/module.decorator';
import { modulesMetadataReader } from '../../modules-metadata-reader';

@Injectable({ type: 'entity', override: MedusaOrder })
class Order extends MedusaOrder {
	testPropertyOrder = 'toto';
}

@Injectable({ type: 'repository', override: MedusaOrderRepository })
class OrderRepository extends Repository<Order> {
	testProperty = 'I am the property from UserRepository that extend MedusaOrderRepository';
}

MedusaUtils.repositoryMixin(OrderRepository, MedusaOrderRepository);

@Module({ imports: [OrderRepository] })
class OrderModule {}

@Injectable({ type: 'entity', resolutionKey: 'another' })
class Another {
	static isHandledByMedusa = true;
	static resolutionKey = 'anotherEntity';
}

@Injectable({ type: 'repository', resolutionKey: 'anotherRepository' })
class AnotherRepository extends Repository<Another> {}

@Module({ imports: [AnotherRepository] })
class AnotherOrderModule {}

describe('Repositories loader', () => {
	const container = createContainer();

	describe('overriddenRepositoriesLoader', () => {
		it(' should override MedusaOrderRepository with OrderRepository', async () => {
			expect((MedusaOrderRepository.prototype as any).testProperty).not.toBeDefined();

			const components = modulesMetadataReader([OrderModule]);
			await overriddenRepositoriesLoader(components.get('repository'));

			const { OrderRepository: MedusaOrderRepositoryReImport } = (await import(
				'@medusajs/medusa/dist/repositories/order'
			)) as { OrderRepository };

			expect(new MedusaOrderRepositoryReImport().findWithRelations).toBeDefined();
			expect((new MedusaOrderRepositoryReImport() as any).testProperty).toBeDefined();
			expect((new MedusaOrderRepositoryReImport() as any).testProperty).toBe(
				'I am the property from UserRepository that extend MedusaOrderRepository'
			);
		});
	});

	describe('repositoriesLoader', () => {
		it(' should register a new repository into the container', async () => {
			expect(container.hasRegistration('anotherRepository')).toBeFalsy();

			const components = modulesMetadataReader([AnotherOrderModule]);
			await repositoriesLoader(components.get('repository'), container);

			expect(container.hasRegistration('anotherRepository')).toBeTruthy();
		});
	});
});
