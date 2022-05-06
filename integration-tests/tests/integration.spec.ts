import { resolve as pathResolve } from 'path';
import { execSync } from 'child_process'
import express, { Express } from 'express';
import portfinder from 'portfinder';
import { AwilixContainer } from "awilix";
import { Medusa } from 'medusa-extender';
import { Server } from 'http';
import { createDatabase, dropDatabase } from 'pg-god'

const isCI = !!process.env.IS_CI

type Context = { app: Express; appListener: Server; port: number; container: AwilixContainer };

async function setupDb(): Promise<void> {
	if (!isCI) {
		await createDatabase({ databaseName: 'medusa-extender' })
	}
	execSync("node_modules/.bin/medusa seed -f data.json -m", { cwd: pathResolve(__dirname, '..') })
}

async function teardown(context: Context): Promise<void> {
	try {
		await new Promise((resolve, reject) => context.appListener.close((err) => err ? reject(err): resolve(void 0)));
		if (!isCI) {
			await dropDatabase({ databaseName: 'medusa-extender' })
		}
	} catch (e) {}
}

async function loadServer(): Promise<Context> {
	return new Promise((resolve, reject) => {
		portfinder.getPort(async (err: unknown, port: number) => {
			if (err) reject(err);

			const app = express();
			const container = await new Medusa(pathResolve(__dirname, '..'), app).load([]);

			const appListener = app.listen(port)

			resolve({
				app,
				appListener,
				port,
				container
			})
		});
	});
}

describe('Medusa-extender', () => {
	let context!: Context;

	beforeAll(async () => {
		await setupDb();
		context = await loadServer();
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
});
