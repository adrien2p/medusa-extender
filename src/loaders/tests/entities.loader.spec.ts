// TODO fix the fact that medusa is using babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { User as MedusaUser } from '@medusajs/medusa/dist';
import { asArray } from './utils/asArray';
import { entitiesLoader, overrideEntitiesLoader } from '../entities.loader';
import { asValue, createContainer } from 'awilix';
import { Injectable, Module } from '../../decorators';
import { metadataReader } from '../../metadata-reader';
import { Entity } from 'typeorm';

@Injectable({ type: 'entity', override: MedusaUser })
@Entity()
class User extends MedusaUser {
	testProperty = 'I am the property from User that extend MedusaUser';
}

@Module({ imports: [User] })
class UserModule {}

@Injectable({ type: 'entity', resolutionKey: 'anotherEntity' })
@Entity()
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
