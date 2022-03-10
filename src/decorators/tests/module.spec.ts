import 'reflect-metadata';
import { Migration } from '../components.decorator';
import { Module } from '../module.decorator';
import { MODULE_KEY } from '../../core';

describe('Module', () => {
	it('should define the module metadata', () => {
		@Migration()
		class Test {}

		@Module({
			imports: [Test],
		})
		class ModuleTest {}

		const imports = Reflect.getMetadata(MODULE_KEY, ModuleTest);
		expect(imports.length).toBe(1);
		expect(imports[0] === Test).toBeTruthy();
	});
});
