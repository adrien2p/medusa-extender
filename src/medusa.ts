import { Express } from 'express';
import { Loader } from './loader';
import { Type } from './types';
/**
 * Register steps that must be executed before/after medusa is load.
 */
export class Medusa {
	readonly #express: Express;
	readonly #rootDir: string;

	/**
	 * @param rootDir Directory where the `medusa-config` is located
	 * @param express Express instance
	 */
	constructor(rootDir: string, express: Express) {
		this.#express = express;
		this.#rootDir = rootDir;
	}

	/**
	 * Launch all the steps before/after medusa according to the `stepOptions`.
	 */
	public async load(...modules: Type[]): Promise<void> {
		await new Loader().load(modules, this.#rootDir, this.#express);
	}
}
