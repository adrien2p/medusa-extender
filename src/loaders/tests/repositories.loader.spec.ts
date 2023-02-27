import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Order as MedusaOrder } from '@medusajs/medusa/dist';
import { OrderRepository as medusaOrderRepository } from '@medusajs/medusa/dist/repositories/order';
import { overrideRepositoriesLoader, repositoriesLoader } from '../repository.loader';
import { asValue, createContainer } from 'awilix';
import { Entity, Repository } from 'typeorm';
import { Entity as MedusaEntity, Module, Repository as MedusaRepository } from '../../decorators';
import { MedusaContainer } from '@medusajs/medusa/dist/types/global';
import { metadataReader } from '../../core';
import { jest, describe, it, expect } from '@jest/globals';

@MedusaEntity({ override: MedusaOrder })
@Entity()
class Order extends MedusaOrder {
	testPropertyOrder = 'toto';
}

const t = typeof medusaOrderRepository;

@MedusaRepository({
	override: medusaOrderRepository as any,
	repositoryName: 'MedusaOrderRepository',
	targetEntity: Order,
})
class OrderRepository extends Repository<Order> {
	testProperty = 'I am the property from UserRepository that extend MedusaOrderRepository';

	test(): Promise<Order[]> {
		return this.find() as Promise<Order[]>;
	}
}

@Module({ imports: [OrderRepository] })
class OrderModule {}

@MedusaEntity()
@Entity()
class Another {}

@MedusaRepository()
class AnotherRepository extends Repository<Another> {}

@Module({ imports: [AnotherRepository] })
class AnotherOrderModule {}

describe('Repositories loader', () => {
	const container = createContainer() as MedusaContainer;

	describe('overriddenRepositoriesLoader', () => {
		it(' should override MedusaOrderRepository with OrderRepository', async () => {
			const components = metadataReader([OrderModule]);
			container.register('orderRepository', asValue(medusaOrderRepository));
			await overrideRepositoriesLoader(components.get('repository'), container);

			const repository = container.resolve('orderRepository') as any;
			const { OrderRepository: MedusaOrderRepositoryReImport } = (await import(
				'@medusajs/medusa/dist/repositories/order'
			)) as { OrderRepository };

			expect(repository.findWithRelations).toBeDefined();
			expect(repository.testProperty).toBeDefined();
			expect(repository.testProperty).toBe(
				'I am the property from UserRepository that extend MedusaOrderRepository'
			);
		});
	});

	describe('repositoriesLoader', () => {
		it(' should register a new repository into the container', async () => {
			expect(container.hasRegistration('anotherRepository')).toBeFalsy();

			const components = metadataReader([AnotherOrderModule]);
			await repositoriesLoader(components.get('repository'), container);

			expect(container.hasRegistration('anotherRepository')).toBeTruthy();
		});
	});
});
