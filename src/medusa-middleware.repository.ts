import { MedusaMiddlewareStatic } from './types';

const preAuthKey = 'preAuth';
const postAuthKey = 'postAuth';

/**
 * @internal
 * The middleware repository that hold all self registered middleawres that must be applied before/after auth.
 */
export class MedusaMiddlewareRepository<T extends MedusaMiddlewareStatic = MedusaMiddlewareStatic> extends Map<
	'preAuth' | 'postAuth',
	T[]
> {
	constructor() {
		super();
		this.set(preAuthKey, []);
		this.set(postAuthKey, []);
	}

	/**
	 * Register a new middleware that must applied before auth.
	 * @param middlewares The middleware to apply
	 */
	public registerPreAuth(...middlewares: T[]): void {
		const _middlewares = this.get(preAuthKey) || [];
		for (const middleware of middlewares) {
			_middlewares.push(middleware);
		}
		this.set(preAuthKey, _middlewares);
	}

	/**
	 * Register a new middleware that must applied after auth.
	 * @param middlewares The middleware to apply
	 */
	public registerPostAuth(...middlewares: T[]): void {
		const _middlewares = this.get(postAuthKey) || [];
		for (const middleware of middlewares) {
			_middlewares.push(middleware);
		}
		this.set(postAuthKey, _middlewares);
	}
}

/**
 * @internal
 * Export the instance of {@link MedusaMiddlewareRepository}
 */
export const medusaMiddlewareRepository = new MedusaMiddlewareRepository();
