import { Module, Service } from '../../decorators';
import { MedusaDynamicModule, ModuleInjectionOptions } from '../../core';
import { modulesLoader } from '../modules.loader';

@Service()
class TestService {}

@Module({ imports: [TestService] })
class MyModule {}

@Module()
class MyDynamicModule implements MedusaDynamicModule {
	async forRoot(): Promise<ModuleInjectionOptions> {
		return { imports: [TestService] };
	}
}

@Service()
class TestService2 {}

@Module({ imports: [TestService2] })
class MyModule2 {}

@Module()
class MyDynamicModule2 implements MedusaDynamicModule {
	async forRoot(): Promise<ModuleInjectionOptions> {
		return { imports: [TestService2] };
	}
}

@Module()
class MyDynamicModuleWithSubModule implements MedusaDynamicModule {
	async forRoot(): Promise<ModuleInjectionOptions> {
		return { imports: [MyModule, TestService2] };
	}
}

describe('Modules loader', () => {
	it('should load decorated modules', async () => {
		const componentsMap = await modulesLoader([MyModule], {});
		const services = componentsMap.get('service');
		expect(services.length).toBe(1);
		expect(new services[0].metatype()).toBeInstanceOf(TestService);
	});

	it('should load dynamic modules', async () => {
		const componentsMap = await modulesLoader([MyDynamicModule], {});
		const services = componentsMap.get('service');
		expect(services.length).toBe(1);
		expect(new services[0].metatype()).toBeInstanceOf(TestService);
	});

	it('should load dynamic modules with mix of modules and components', async () => {
		const componentsMap = await modulesLoader([MyDynamicModuleWithSubModule], {});
		const services = componentsMap.get('service');
		expect(services.length).toBe(2);
		expect(new services[0].metatype()).toBeInstanceOf(TestService);
		expect(new services[1].metatype()).toBeInstanceOf(TestService2);
	});

	it('should load multiple decorated modules', async () => {
		const componentsMap = await modulesLoader([MyModule, MyModule2], {});
		const services = componentsMap.get('service');
		expect(services.length).toBe(2);
		expect(new services[0].metatype()).toBeInstanceOf(TestService);
		expect(new services[1].metatype()).toBeInstanceOf(TestService2);
	});

	it('should load multiple dynamic modules', async () => {
		const componentsMap = await modulesLoader([MyDynamicModule, MyDynamicModule2], {});
		const services = componentsMap.get('service');
		expect(services.length).toBe(2);
		expect(new services[0].metatype()).toBeInstanceOf(TestService);
		expect(new services[1].metatype()).toBeInstanceOf(TestService2);
	});

	it('should load multiple decorated and dynamic modules', async () => {
		const componentsMap = await modulesLoader([MyModule, MyDynamicModule2], {});
		const services = componentsMap.get('service');
		expect(services.length).toBe(2);

		/* Note: dynamic modules are always first to be added to ComponentMap */
		expect(new services[0].metatype()).toBeInstanceOf(TestService2);
		expect(new services[1].metatype()).toBeInstanceOf(TestService);
	});
});
