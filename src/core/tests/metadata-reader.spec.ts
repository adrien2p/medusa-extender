import { metadataReader } from '../metadata-reader';
import { Middleware, Module, Service } from '../../decorators';

@Middleware({ requireAuth: false, routes: [] })
export class FakeMiddleware {}

@Service({ resolutionKey: 'FakeService' })
export class FakeService {}

@Middleware({ requireAuth: false, routes: [] })
export class FakeMiddleware2 {}

@Service({ resolutionKey: 'FakeService2' })
export class FakeService2 {}

@Module({ imports: [FakeMiddleware2, FakeService2] })
export class FakeSubModule {}

@Module({ imports: [FakeSubModule, FakeMiddleware, FakeService] })
export class FakeModule {}

describe('metadata-reader', () => {
	it('should create a map of components from the modules', () => {
		const componentsMap = metadataReader([FakeModule]);

		expect(Array.from(componentsMap.entries()).length).toBe(2);
		expect(componentsMap.get('middleware').length).toBe(2);
		expect(componentsMap.get('service').length).toBe(2);

		const allComponents = Array.from(componentsMap.values()).reduce((components, values) => {
			components.push(...values);
			return components;
		}, []);
		expect(allComponents.length).toBe(4);

		const middlewareNames = componentsMap.get('middleware').map((component) => component.metatype.name);
		expect(middlewareNames.includes('FakeMiddleware')).toBeTruthy();
		expect(middlewareNames.includes('FakeMiddleware2')).toBeTruthy();

		const serviceNames = componentsMap.get('service').map((component) => component.metatype.name);
		expect(serviceNames.includes('FakeService')).toBeTruthy();
		expect(serviceNames.includes('FakeService2')).toBeTruthy();
	});
});
