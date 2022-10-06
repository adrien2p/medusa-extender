import { GetInjectableOptions, InjectableComponentTypes } from './types';

export class ComponentMap extends Map<InjectableComponentTypes, GetInjectableOptions> {
	constructor(entries?: readonly (readonly [InjectableComponentTypes, GetInjectableOptions])[] | null) {
		if (!entries || entries.length === 1) {
			super(entries);
			return;
		}

		const mergedEntries = new Map();
		for (const [entryComponentType, entryOptions] of entries) {
			mergedEntries.set(entryComponentType, [...(mergedEntries.get(entryComponentType) ?? []), ...entryOptions]);
		}
		super(mergedEntries.entries());
	}
	get<TComponentType extends InjectableComponentTypes>(key: TComponentType): GetInjectableOptions<TComponentType> {
		return super.get(key) as GetInjectableOptions<TComponentType>;
	}
}
