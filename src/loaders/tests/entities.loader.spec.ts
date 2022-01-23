// TODO fix the fact that medusa is using babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { User as MedusaUser } from '@medusajs/medusa/dist';
import { asArray } from './utils/asArray';
import { MedusaEntity } from '../../types';
import { entitiesLoader, overriddenEntitiesLoader } from '../entities.loader';
import { asValue, createContainer } from 'awilix';

class User extends MedusaUser implements MedusaEntity<User, typeof MedusaUser> {
	static overriddenType = MedusaUser;
	static isHandledByMedusa = true;

	testProperty = 'I am the property from User that extend MedusaUser';
}

class Another implements MedusaEntity {
	static isHandledByMedusa = true;
	static resolutionKey = 'anotherEntity';
}

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

			await overriddenEntitiesLoader([User]);
			const { User: MedusaUserReImport } = await import('@medusajs/medusa/dist/models/user');

			expect((new MedusaUserReImport() as User).testProperty).toBeDefined();
			expect((new MedusaUserReImport() as User).testProperty).toBe(
				'I am the property from User that extend MedusaUser'
			);
		});
	});

	describe('entitiesLoader', () => {
		it(' should register a new entity into the container', async () => {
			expect(container.hasRegistration(Another.resolutionKey)).toBeFalsy();

			await entitiesLoader([Another], container);

			expect(container.hasRegistration(Another.resolutionKey)).toBeTruthy();
		});
	});
});