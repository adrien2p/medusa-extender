// TODO fix the fact that medusa is using babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Order as MedusaOrder } from '@medusajs/medusa/dist';
import { OrderRepository as MedusaOrderRepository } from '@medusajs/medusa/dist/repositories/order';
import { overrideRepositoriesLoader, repositoriesLoader } from '../repository.loader';
import { createContainer } from 'awilix';
import { Entity, EntityRepository, Repository } from 'typeorm';
import { Utils } from '../../utils';
import { Entity as MedusaEntity, Module, Repository as MedusaRepository } from '../../decorators';
import { metadataReader } from '../../metadata-reader';

@MedusaEntity({ override: MedusaOrder })
@Entity()
class Order extends MedusaOrder {
	testPropertyOrder = 'toto';
}

@MedusaRepository({ override: MedusaOrderRepository })
@EntityRepository()
class OrderRepository extends Utils.repositoryMixin<Order, MedusaOrderRepository>(MedusaOrderRepository) {
	testProperty = 'I am the property from UserRepository that extend MedusaOrderRepository';

	test(): Promise<Order[]> {
		return this.findWithRelations() as Promise<Order[]>;
	}
}

@Module({ imports: [OrderRepository] })
class OrderModule {}

@MedusaEntity({ resolutionKey: 'anotherEntity' })
@Entity()
class Another {}

@MedusaRepository({ resolutionKey: 'anotherRepository' })
@EntityRepository()
class AnotherRepository extends Repository<Another> {}

@Module({ imports: [AnotherRepository] })
class AnotherOrderModule {}

describe('Repositories loader', () => {
	const container = createContainer();

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
			expect(container.hasRegistration('anotherRepository')).toBeFalsy();

			const components = metadataReader([AnotherOrderModule]);
			await repositoriesLoader(components.get('repository'), container);

			expect(container.hasRegistration('anotherRepository')).toBeTruthy();
		});
	});
});
