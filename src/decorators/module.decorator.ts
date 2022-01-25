import { MODULE_KEY } from '../contants';
import { Type } from '../types';

export function MedusaModule({ imports }: { imports: Type[] }): ClassDecorator {
	return (target: object) => {
		Reflect.defineMetadata(MODULE_KEY, imports, target);
	};
}
