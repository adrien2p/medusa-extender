import { Module } from '../decorators';
import { MedusaDynamicModule, metadataReader, Type } from '../core';
import { ComponentMap } from '../core/componentMap';

export async function modulesLoader(
	modules: Type[],
	configModule: Record<string, unknown>,
	componentMap?: ComponentMap
): Promise<ComponentMap> {
	componentMap = componentMap || new ComponentMap();

	const resolvedModules = [];
	for (const module of modules) {
		if (isDynamicModule(module)) {
			const resolvedImports = await new module().forRoot(configModule);

			@Module({ imports: resolvedImports.imports })
			class TransientModule {}

			const subComponentMap = await modulesLoader([TransientModule], configModule);
			componentMap = new ComponentMap([
				...Array.from(componentMap.entries()),
				...Array.from(subComponentMap.entries()),
			]);
			continue;
		}

		resolvedModules.push(module);
	}

	return new ComponentMap([...Array.from(componentMap.entries()), ...metadataReader(resolvedModules)]);
}

function isDynamicModule(module: Type): module is Type<MedusaDynamicModule> {
	return module.prototype.forRoot && typeof module.prototype.forRoot === 'function';
}
