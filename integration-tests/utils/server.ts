import { Medusa, Type } from 'medusa-extender';
import portfinder from 'portfinder';
import express, { NextFunction, Request, Response } from 'express';
import { resolve as pathResolve } from 'path';
import supertest from 'supertest';
import { Context } from './types';

export async function serverTeardown(context: Context): Promise<void> {
	try {
		await new Promise((resolve, reject) =>
			context.appListener.close((err) => (err ? reject(err) : resolve(void 0)))
		);
	} catch (e) {}
}

export async function loadServer(modules: Type[], { verbose }: { verbose?: boolean } = {}): Promise<Context> {
	if (!verbose) {
		const noop = () => void 0
		console.log = noop
		console.warn = noop
		console.error = noop
	}

	return await new Promise((resolve, reject) => {
		portfinder.getPort(async (err: unknown, port: number) => {
			if (err) reject(err);

			const app = express();
			app.set('trust proxy', 1);
			app.use((req: Request & { session: any }, res: Response, next: NextFunction) => {
				req.session = {};
				const data = req.get('Cookie');
				if (data) {
					req.session = {
						...req.session,
						...JSON.parse(data),
					};
				}
				next();
			});

			const container = await new Medusa(pathResolve(__dirname, '..'), app).load(modules);

			const appListener = app.listen(port);

			resolve({
				app,
				appListener,
				port,
				container,
				request: supertest(app),
				config: container.resolve('configModule'),
			});
		});
	});
}
