import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { User as MedusaUser } from '@medusajs/medusa/dist';
import { entitiesLoader, overrideEntitiesLoader } from '../entities.loader';
import { Entity as MedusaEntity, Module } from '../../decorators';
import { metadataReader } from '../../core';
import { Entity } from 'typeorm';
import { newContainer } from './utils/new-container';

@MedusaEntity({ override: MedusaUser })
@Entity()
class User extends MedusaUser {
	testProperty = 'I am the property from User that extend MedusaUser';
}

@Module({ imports: [User] })
class UserModule {}

@MedusaEntity()
@Entity()
class Another {}

@Module({ imports: [Another] })
class AnotherModule {}

describe('Entities loader', () => {
	const container = newContainer();

	describe('overriddenEntitiesLoader', () => {
		it(' should override MedusaUser with User', async () => {
			expect((MedusaUser.prototype as User & { testProperty: string }).testProperty).not.toBeDefined();

			const components = metadataReader([UserModule]);
			await overrideEntitiesLoader(components.get('entity'));
			const { User: MedusaUserReImport } = (await import('@medusajs/medusa/dist/models/user')) as { User };

			expect(new MedusaUserReImport().testProperty).toBeDefined();
			expect(new MedusaUserReImport().testProperty).toBe('I am the property from User that extend MedusaUser');
		});
	});

	describe('entitiesLoader', () => {
		it(' should register a new entity into the container', async () => {
			expect(container.hasRegistration('anotherEntity')).toBeFalsy();

			const components = metadataReader([AnotherModule]);
			await entitiesLoader(components.get('entity'), container);

			expect(container.hasRegistration('anotherEntity')).toBeTruthy();
		});
	});
});
