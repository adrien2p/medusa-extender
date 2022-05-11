import { resolve as pathResolve } from 'path';
import express, { Express } from 'express';
import portfinder from 'portfinder';
import { AwilixContainer } from 'awilix';
import { Medusa, Type } from 'medusa-extender';
import { CartService as MedusaCartService } from '@medusajs/medusa';
import { Server } from 'http';
import { CartService, TestModule, TestService } from './fixtures/components';

type Context = { app: Express; appListener: Server; port: number; container: AwilixContainer };

async function serverTeardown(context: Context): Promise<void> {
	try {
		await new Promise((resolve, reject) =>
			context.appListener.close((err) => (err ? reject(err) : resolve(void 0)))
		);
	} catch (e) {}
}

async function loadServer(modules: Type[]): Promise<Context> {
	return await new Promise((resolve, reject) => {
		portfinder.getPort(async (err: unknown, port: number) => {
			if (err) reject(err);

			const app = express();
			const container = await new Medusa(pathResolve(__dirname, '..'), app).load(modules);

			const appListener = app.listen(port);

			resolve({
				app,
				appListener,
				port,
				container,
			});
		});
	});
}

describe('Medusa-extender', () => {
	let context!: Context;

	beforeAll(async () => {
		context = await loadServer([TestModule]);
	});

	afterAll(async () => {
		await serverTeardown(context);
	});

	it('validate that the context is properly loaded', () => {
		expect(context.app).toBeTruthy();
		expect(context.appListener).toBeTruthy();
		expect(context.port).toBeTruthy();
		expect(context.container).toBeTruthy();
	});

	describe('services loader', () => {
		it('should load service components', () => {
			const testService: TestService = context.container.resolve(TestService.resolutionKey);
			expect(testService).toBeTruthy();
			expect(testService).toBeInstanceOf(TestService);
		});

		it('should load overridden service components', () => {
			const cartService: CartService = context.container.resolve(CartService.resolutionKey);
			expect(cartService).toBeTruthy();
			expect(cartService).toBeInstanceOf(CartService);
			expect(cartService).toBeInstanceOf(MedusaCartService);

			expect(cartService.customMethod).toBeTruthy();

			cartService.customMethod();

			expect(cartService.customMethod).toHaveBeenCalled();
		});
	});
});
