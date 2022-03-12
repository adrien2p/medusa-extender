import { GetInjectableOptions, Logger, Type } from '../core';
import { ValidatorOptions } from 'class-validator';

const logger = Logger.contextualize('ValidatorsLoader');

/**
 * @internal
 * Load all custom extended validators into the underlying @medusajs instance.
 * @param validatorsOptions
 */
export async function validatorsLoader(validatorsOptions: GetInjectableOptions<'validator'>): Promise<void> {
	logger.log('Loading custom validators into the underlying @medusajs');

	const module = await import('@medusajs/medusa/dist/utils/validator');
	const originalValidator = module.validator;
	module.validator = <T, V>(typedClass: Type<T>, plain: V, config?: ValidatorOptions): Promise<T> => {
		for (const validatorOptions of validatorsOptions) {
			if (validatorOptions.override.name === typedClass.name) {
				typedClass = validatorOptions.metatype as Type<T>;
				break;
			}
		}
		return originalValidator(typedClass, plain, config);
	};

	logger.log(`${validatorsOptions.length} validators applied`);
}
