import { GetInjectableOptions, InjectableComponentTypes, InjectableOptions, Type } from './types';
import { INJECTABLE_OPTIONS_KEY, MODULE_KEY } from './contants';

class CustomMap extends Map<InjectableComponentTypes, GetInjectableOptions> {
	get<TComponentType extends InjectableComponentTypes>(key: TComponentType): GetInjectableOptions<TComponentType> {
		return super.get(key) as GetInjectableOptions<TComponentType>;
	}
}

/**
 * Read all metadata from the imported modules and extract components that will be stored by there type.
 * @param modules The modules from which the metadata are read.
 */
export function readMetadatas(modules: Type[]): CustomMap {
	const optionsMap = new CustomMap();

	for (const module of modules) {
		const moduleImports = Reflect.getMetadata(MODULE_KEY, module);

		for (const component of moduleImports) {
			const options = readModuleImportMetadata(component);
			optionsMap.set(options.type, [...optionsMap.get(options.type), { ...options, metatype: component }]);
		}
	}

	return optionsMap;
}

/**
 * @Internal
 * Return the options from a component.
 * @param component
 */
function readModuleImportMetadata(component: Type[]): InjectableOptions {
	return Reflect.getMetadata(INJECTABLE_OPTIONS_KEY, component);
}
