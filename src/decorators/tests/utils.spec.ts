import 'reflect-metadata';
import { INJECTABLE_OPTIONS_KEY, InjectableComponentTypes, InjectableOptions } from '../../core';
import { buildComponentDecorator } from '../helpers/build-component-decorator';

class Test {}

describe('Utils decorators', () => {
	describe('buildComponentDecorator', () => {
		it('should define the correct metadata', () => {
			const metadataKeys = Reflect.getOwnMetadataKeys(Test);
			expect(metadataKeys.length).toBe(0);

			const metadata = { type: 'service', resolutionKey: 'resolutionKey' } as InjectableOptions & {
				type: InjectableComponentTypes;
			};
			buildComponentDecorator(metadata)(Test);
			const appliedMetadataKeys = Reflect.getOwnMetadataKeys(Test);
			expect(appliedMetadataKeys.length).toBe(1);
			expect(appliedMetadataKeys[0]).toBe(INJECTABLE_OPTIONS_KEY);

			const metadataValue = Reflect.getMetadata(INJECTABLE_OPTIONS_KEY, Test);
			expect(metadataValue).toEqual(metadata);
		});
	});
});
