// TODO fix the fact that medusa is using babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { User as MedusaUser } from '@medusajs/medusa/dist';
import { UserRepository as MedusaUserRepository } from '@medusajs/medusa/dist/repositories/user';
import { MedusaEntity, MedusaRepository } from '../../types';
import { overriddenRepositoriesLoader, repositoriesLoader } from '../repository.loader';
import { createContainer } from 'awilix';
import { Repository } from 'typeorm';

class User extends MedusaUser implements MedusaEntity<User, typeof MedusaUser> {
	static overriddenType = MedusaUser;
	static isHandledByMedusa = true;
}

class UserRepository extends Repository<User> implements MedusaRepository<MedusaUserRepository, typeof UserRepository> {
	static overriddenType = MedusaUserRepository;
	static isHandledByMedusa = true;

	testProperty = 'I am the property from UserRepository that extend MedusaUserRepository';
}

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
		it(' should override MedusaUserRepository with UserRepository', async () => {
			expect((MedusaUserRepository.prototype as any).testProperty).not.toBeDefined();

			await overriddenRepositoriesLoader([UserRepository]);
			const { UserRepository: MedusaUserRepositoryReImport } = await import(
				'@medusajs/medusa/dist/repositories/user'
			);

			expect((new MedusaUserRepositoryReImport() as UserRepository).testProperty).toBeDefined();
			expect((new MedusaUserRepositoryReImport() as UserRepository).testProperty).toBe(
				'I am the property from UserRepository that extend MedusaUserRepository'
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
