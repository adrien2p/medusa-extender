<<<<<<< HEAD
import { GetInjectableOptions, Type } from '../types';
import { ValidatorOptions } from 'class-validator';

export async function validatorsLoader(validatorsOptions: GetInjectableOptions<'validator'>): Promise<void> {
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
}
=======
import { GetInjectableOptions, Type } from "../types";
import { ValidatorOptions } from "class-validator";

export async function validatorsLoader(validatorsOptions: GetInjectableOptions<'validator'>): Promise<void> {
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
}
>>>>>>> b652414... Feat() Add support to extends validator
