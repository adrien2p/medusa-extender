import { Express } from 'express';
import { MedusaLoader } from './medusa-loader';
import { MedusaMiddlewareStatic } from './types';
import { medusaMiddlewareRepository } from './medusa-middleware.repository';

/**
 * Step type of type function that take in express instance and return Promise<Express>.
 */
type Step = (express: Express) => Promise<Express>;

/**
 * Step options with `rank` and `isBefore`
 */
type StepOptions = { rank: number; isBefore?: boolean };

/**
 * Register steps that must be executed before/after medusa is load.
 */
export class Medusa {
	readonly #express: Express;
	readonly #middlewareRepository = medusaMiddlewareRepository;
	readonly #rootDir: string;
	readonly #beforeSteps: Set<{ step: Step; options: StepOptions }> = new Set();
	readonly #afterSteps: Set<{ step: Step; options: StepOptions }> = new Set();

	/**
	 * @param rootDir Directory where the `medusa-config` is located
	 * @param express Express instance
	 */
	constructor(rootDir: string, express: Express) {
		this.#express = express;
		this.#rootDir = rootDir;
	}

	/**
	 * Register middlewares to be apply before/after auth middleware.
	 * @param middlewares The middlewares to consume
	 */
	public consume(...middlewares: MedusaMiddlewareStatic[]): Medusa {
		this.#middlewareRepository.registerPreAuth(
			...middlewares.filter((middleware) => {
				return !middleware.isPostAuth && middleware.isHandledByMedusa;
			})
		);
		this.#middlewareRepository.registerPostAuth(
			...middlewares.filter((middleware) => {
				return middleware.isPostAuth && middleware.isHandledByMedusa;
			})
		);
		return this;
	}

	/**
	 * Register a step that must be executed before medusa is loaded.
	 * @param step The step to execute
	 */
	public registerStepBeforeMedusaLaunch(step: Step): Medusa {
		const rank = this.#afterSteps.size;
		this.#beforeSteps.add({ step, options: { rank, isBefore: true } });
		return this;
	}

	/**
	 * Register a step that must be executed after medusa is loaded.
	 * @param step The step to execute
	 */
	public registerStepAfterMedusaLaunch(step: Step): Medusa {
		const rank = this.#afterSteps.size;
		this.#afterSteps.add({ step, options: { rank } });
		return this;
	}

	/**
	 * Launch all the steps before/after medusa according to the `stepOptions`.
	 */
	public async load(): Promise<void> {
		const orderedBeforeSteps = [...this.#beforeSteps]
			.sort(({ options: { rank: firstRank } }, { options: { rank: secondRank } }) =>
				firstRank > secondRank ? 1 : -1
			)
			.map(({ step }) => step);
		const orderedAfterSteps = [...this.#afterSteps]
			.sort(({ options: { rank: firstRank } }, { options: { rank: secondRank } }) =>
				firstRank > secondRank ? 1 : -1
			)
			.map(({ step }) => step);

		await this.runSteps(orderedBeforeSteps);
		await new MedusaLoader().load(this.#rootDir, this.#express);
		await this.runSteps(orderedAfterSteps);
	}

	/**
	 * @private
	 * Run all the steps passed as argument.
	 * @param steps Steps that must be executed
	 * @return Promise<void>
	 */
	private async runSteps(steps: Step[]): Promise<void> {
		for (const step of steps) {
			await step(this.#express);
		}
	}
}
