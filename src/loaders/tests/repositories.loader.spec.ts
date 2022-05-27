import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Order as MedusaOrder } from '@medusajs/medusa/dist';
import { OrderRepository as MedusaOrderRepository } from '@medusajs/medusa/dist/repositories/order';
import { overrideRepositoriesLoader, repositoriesLoader } from '../repository.loader';
import { createContainer } from 'awilix';
import { Entity, EntityRepository, Repository } from 'typeorm';
import { Entity as MedusaEntity, Module, Repository as MedusaRepository } from '../../decorators';
import { MedusaContainer, metadataReader, repositoryMixin } from '../../core';

@MedusaEntity({ override: MedusaOrder })
@Entity()
class Order extends MedusaOrder {
	testPropertyOrder = 'toto';
}

@MedusaRepository({ override: MedusaOrderRepository })
@EntityRepository()
class OrderRepository extends repositoryMixin<Order, MedusaOrderRepository>(MedusaOrderRepository) {
	testProperty = 'I am the property from UserRepository that extend MedusaOrderRepository';

	test(): Promise<Order[]> {
		return this.findWithRelations() as Promise<Order[]>;
	}
}

@Module({ imports: [OrderRepository] })
class OrderModule {}

@MedusaEntity()
@Entity()
class Another {}

@MedusaRepository()
@EntityRepository()
class AnotherRepository extends Repository<Another> {}

@Module({ imports: [AnotherRepository] })
class AnotherOrderModule {}

describe('Repositories loader', () => {
	const container = createContainer() as MedusaContainer;

	describe('overriddenRepositoriesLoader', () => {
		it(' should override MedusaOrderRepository with OrderRepository', async () => {
			const components = metadataReader([OrderModule]);
			await overrideRepositoriesLoader(components.get('repository'));

			const { OrderRepository: MedusaOrderRepositoryReImport } = (await import(
				'@medusajs/medusa/dist/repositories/order'
			)) as { OrderRepository };

			expect(new MedusaOrderRepositoryReImport().findWithRelations).toBeDefined();
			expect(new MedusaOrderRepositoryReImport().testProperty).toBeDefined();
			expect(new MedusaOrderRepositoryReImport().testProperty).toBe(
				'I am the property from UserRepository that extend MedusaOrderRepository'
			);
		});
	});

	describe('repositoriesLoader', () => {
		it(' should register a new repository into the container', async () => {
			expect(container.has('anotherRepository')).toBeFalsy();

			const components = metadataReader([AnotherOrderModule]);
			await repositoriesLoader(components.get('repository'), container);

			expect(container.has('anotherRepository')).toBeTruthy();
		});
	});
});
