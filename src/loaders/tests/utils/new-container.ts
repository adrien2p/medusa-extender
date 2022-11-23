import { asFunction, asValue, ClassOrFunctionReturning, createContainer, Resolver } from 'awilix';
import { MedusaContainer } from '../../../core';
import { asArray } from './asArray';

export const newContainer = (): MedusaContainer => {
	const container = createContainer() as MedusaContainer;
	//@ts-ignore
	container.registerAdd = function (
		this: MedusaContainer,
		name: string,
		registration: typeof asFunction | typeof asValue
	) {
		const storeKey = name + '_STORE';

		if (this.registrations[storeKey] === undefined) {
			this.register(storeKey, asValue([] as Resolver<unknown>[]));
		}
		const store = this.resolve(storeKey) as (ClassOrFunctionReturning<unknown> | Resolver<unknown>)[];

		if (this.registrations[name] === undefined) {
			this.register(name, asArray(store));
		}
		store.unshift(registration);

		return this;
	}.bind(container);

	return container;
};
