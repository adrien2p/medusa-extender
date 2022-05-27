import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { User as MedusaUser } from '@medusajs/medusa/dist';
import { asArray } from './utils/asArray';
import { entitiesLoader, overrideEntitiesLoader } from '../entities.loader';
import { asValue, createContainer } from 'awilix';
import { Entity as MedusaEntity, Module } from '../../decorators';
import { MedusaContainer, metadataReader } from '../../core';
import { Entity } from 'typeorm';

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
	const container = createContainer() as MedusaContainer;
	container.registerAdd = function (name, registration) {
		const storeKey = name + '_STORE';

		if (this.registrations[storeKey] === undefined) {
			this.register(storeKey, asValue([]));
		}
		const store = this.resolve(storeKey);

		if (this.registrations[name] === undefined) {
			this.register(name, asArray(store));
		}
		store.unshift(registration);

		return this;
	}.bind(container);

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
			expect(container.has('anotherEntity')).toBeFalsy();

			const components = metadataReader([AnotherModule]);
			await entitiesLoader(components.get('entity'), container);

			expect(container.has('anotherEntity')).toBeTruthy();
		});
	});
});
