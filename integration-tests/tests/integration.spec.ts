import { resolve as pathResolve } from 'path';
import express, { Express } from 'express';
import portfinder from 'portfinder';
import { AwilixContainer } from 'awilix';
import { Medusa, Type } from 'medusa-extender';
import { CartService as MedusaCartService } from '@medusajs/medusa';
import { Server } from 'http';
import { createDatabase, dropDatabase } from 'pg-god';
import { CartService, TestModule, TestService } from './fixtures/components';
import { execSync } from 'child_process';

const isCI = !!process.env.IS_CI;

type Context = { app: Express; appListener: Server; port: number; container: AwilixContainer };

async function setupDb(): Promise<void> {
	if (!isCI) {
		await dropDatabase({ databaseName: 'medusa-extender' }).catch(() => void 0);
		await createDatabase({ databaseName: 'medusa-extender' });
	}
	execSync('node_modules/.bin/medusa migrations run', { cwd: pathResolve(__dirname, '..') });
}

async function teardown(context: Context): Promise<void> {
	try {
		await new Promise((resolve, reject) =>
			context.appListener.close((err) => (err ? reject(err) : resolve(void 0)))
		);
		if (!isCI) {
			await dropDatabase({ databaseName: 'medusa-extender' });
		}
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
		await setupDb();
		context = await loadServer([TestModule]);
	});

	afterAll(async () => {
		await teardown(context);
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
