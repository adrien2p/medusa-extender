// TODO fix the fact that medusa is using babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { User as MedusaUser } from '@medusajs/medusa/dist';
import { asArray } from './utils/asArray';
import { entitiesLoader, overriddenEntitiesLoader } from '../entities.loader';
import { asValue, createContainer } from 'awilix';
import { Injectable } from '../../decorators/injectable.decorator';
import { Module } from '../../decorators/module.decorator';
import { readMetadatas } from '../../read-metadatas';

@Injectable({ type: 'entity', override: MedusaUser })
class User extends MedusaUser {
	testProperty = 'I am the property from User that extend MedusaUser';
}

@Module({ imports: [User] })
class UserModule {}

@Injectable({ type: 'entity', resolutionKey: 'anotherEntity' })
class Another {}

@Module({ imports: [Another] })
class AnotherModule {}

describe('Entities loader', () => {
	const container = createContainer();
	(container as any).registerAdd = function (name, registration) {
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
			expect((MedusaUser.prototype as any).testProperty).not.toBeDefined();

			const components = readMetadatas([UserModule]);
			await overriddenEntitiesLoader(components.get('entity'));
			const { User: MedusaUserReImport } = await import('@medusajs/medusa/dist/models/user');

			expect((new MedusaUserReImport() as User).testProperty).toBeDefined();
			expect((new MedusaUserReImport() as User).testProperty).toBe(
				'I am the property from User that extend MedusaUser'
			);
		});
	});

	describe('entitiesLoader', () => {
		it(' should register a new entity into the container', async () => {
			expect(container.hasRegistration('anotherEntity')).toBeFalsy();

			const components = readMetadatas([AnotherModule]);
			await entitiesLoader(components.get('entity'), container);

			expect(container.hasRegistration('anotherEntity')).toBeTruthy();
		});
	});
});
