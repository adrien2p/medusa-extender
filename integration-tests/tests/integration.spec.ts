import supertest from "supertest";
import { resolve as pathResolve } from 'path';
import express, { NextFunction, Request, Response } from 'express';
import portfinder from 'portfinder';
import { Medusa, Type } from 'medusa-extender';
import { CartService as MedusaCartService } from '@medusajs/medusa';
import { IdMap } from 'medusa-test-utils';
import { CartService, TestModule, TestService } from './fixtures/components';
import { Context } from "./helpers/types";
import { makeRequest } from "./helpers/request";

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
			app.set("trust proxy", 1);
			app.use((req: Request & { session: any }, res: Response, next: NextFunction) => {
			  req.session = {}
			  const data = req.get("Cookie")
			  if (data) {
				req.session = {
				  ...req.session,
				  ...JSON.parse(data),
				}
			  }
			  next()
			});

			const container = await new Medusa(pathResolve(__dirname, '..'), app).load(modules);

			const appListener = app.listen(port);

			resolve({
				app,
				appListener,
				port,
				container,
				request: supertest(app),
				config: container.resolve('configModule')
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

	describe('admin api loader', () => {
		it('should apply unauthenticated route under the admin path and succeed on request', async () => {
			const res = await makeRequest(context, {
				path: `/admin/test-path`,
				method: 'get',
			}).expect(200);
			expect(res.text).toBe('healthy')
		});

		it('should apply authenticated route under the admin path and throw on an unauthenticated request', async () => {
			await makeRequest(context, {
				path: `/admin/authenticated-test-path`,
				method: 'get',
			}).expect(401);
		});

		it('should apply authenticated route under the admin path and succeed on authenticated request', async () => {
			const res = await makeRequest(context, {
				path: `/admin/authenticated-test-path`,
				method: 'get',
				adminSession: {
					jwt: {
						userId: IdMap.getId("admin_user"),
					},
				},
			}).expect(200);
			expect(res.text).toBe('healthy authenticated')
		});
	});
});
