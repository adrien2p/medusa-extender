import { parseComponentValue } from '../../utils/parse-component-value';

describe('parseComponentValue', () => {
	it('should parse the component path name and return the descriptor', () => {
		const descriptor = parseComponentValue('src/modules/test/test.module.ts');
		expect(descriptor.fullDestinationPath).toBe(process.cwd() + '/' + 'src/modules/test');
		expect(descriptor.relativeDestinationPath).toBe('src/modules/test');
		expect(descriptor.componentFileName).toBe('test.module.ts');
		expect(descriptor.componentName).toBe('TestModule');
	});
});
