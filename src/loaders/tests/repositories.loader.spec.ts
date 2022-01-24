// TODO fix the fact that medusa is using babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Order as MedusaOrder } from '@medusajs/medusa/dist';
import { OrderRepository as MedusaOrderRepository } from '@medusajs/medusa/dist/repositories/order';
import { MedusaEntity, MedusaRepository, MedusaRepositoryStatic } from '../../types';
import { overriddenRepositoriesLoader, repositoriesLoader } from '../repository.loader';
import { createContainer } from 'awilix';
import { Repository } from 'typeorm';
import { MedusaUtils } from '../../index';

class Order extends MedusaOrder implements MedusaEntity<Order, typeof MedusaOrder> {
	static overriddenType = MedusaOrder;
	static isHandledByMedusa = true;
}

class OrderRepository
	extends Repository<Order>
	implements MedusaRepository<MedusaOrderRepository, typeof OrderRepository>
{
	static overriddenType = MedusaOrderRepository;
	static isHandledByMedusa = true;

	testProperty = 'I am the property from UserRepository that extend MedusaOrderRepository';
}

const orderRepositoryExtended = MedusaUtils.repositoryMixin<Order>(OrderRepository, MedusaOrderRepository);

class Another implements MedusaEntity {
	static isHandledByMedusa = true;
	static resolutionKey = 'anotherEntity';
}

class AnotherRepository extends Repository<Another> implements MedusaRepository<AnotherRepository> {
	static isHandledByMedusa = true;
	static resolutionKey = 'anotherRepository';
}

describe('Repositories loader', () => {
	const container = createContainer();

	describe('overriddenRepositoriesLoader', () => {
		it(' should override MedusaOrderRepository with OrderRepository', async () => {
			expect((MedusaOrderRepository.prototype as any).testProperty).not.toBeDefined();

			await overriddenRepositoriesLoader([orderRepositoryExtended as MedusaRepositoryStatic]);
			const { OrderRepository: MedusaOrderRepositoryReImport } = await import(
				'@medusajs/medusa/dist/repositories/order'
			) as unknown as { OrderRepository };

			expect(new MedusaOrderRepositoryReImport().findWithRelations).toBeDefined();
			expect(new MedusaOrderRepositoryReImport().testProperty).toBeDefined();
			expect(new MedusaOrderRepositoryReImport().testProperty).toBe(
				'I am the property from UserRepository that extend MedusaOrderRepository'
			);
		});
	});

	describe('repositoriesLoader', () => {
		it(' should register a new repository into the container', async () => {
			expect(container.hasRegistration(AnotherRepository.resolutionKey)).toBeFalsy();

			await repositoriesLoader([AnotherRepository], container);

			expect(container.hasRegistration(AnotherRepository.resolutionKey)).toBeTruthy();
		});
	});
});
