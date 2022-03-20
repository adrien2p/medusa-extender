import { GetInjectableOptions, InjectableComponentTypes } from './types';

export class ComponentMap extends Map<InjectableComponentTypes, GetInjectableOptions> {
	get<TComponentType extends InjectableComponentTypes>(key: TComponentType): GetInjectableOptions<TComponentType> {
		return super.get(key) as GetInjectableOptions<TComponentType>;
	}
}
