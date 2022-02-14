// TODO fix the fact that medusa is using babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { asValue, createContainer } from 'awilix';
import { Middleware, Module } from '../../decorators';
import { MedusaAuthenticatedRequest, MedusaMiddleware } from '../../types';
import { NextFunction, Request, Response } from 'express';
import { middlewaresLoader, wrapMiddleware } from '../middlewares.loader';
import { metadataReader } from '../../metadata-reader';
import { MEDUSA_RESOLVER_KEYS } from '../../constants';
import express = require('express');

const MiddlewareServiceMock = {
	addPreAuthentication: jest.fn(),
	addPostAuthentication: jest.fn(),
};

@Middleware({ requireAuth: false, routes: [{ path: '/admin/test', method: 'get' }] })
class PreAuthUserMiddleware implements MedusaMiddleware {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	consume(req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction): void | Promise<void> {
		return;
	}
}

@Middleware({ requireAuth: true, routes: [{ path: '/admin/test', method: 'get' }] })
class PostAuthUserMiddleware implements MedusaMiddleware {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	consume(req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction): void | Promise<void> {
		return;
	}
}

@Module({ imports: [PreAuthUserMiddleware, PostAuthUserMiddleware] })
class UserModule {}

describe('Middlewares loader', () => {
	const app = express();
	const container = createContainer();
	container.register({
		[MEDUSA_RESOLVER_KEYS.MiddlewareService]: asValue(MiddlewareServiceMock),
	});

	it('should call the appropriate method base on requiredAuth option', async () => {
		expect(MiddlewareServiceMock.addPostAuthentication).not.toHaveBeenCalled();
		expect(MiddlewareServiceMock.addPreAuthentication).not.toHaveBeenCalled();

		const components = metadataReader([UserModule]);
		middlewaresLoader(app, container, components.get('middleware'));

		console.log(wrapMiddleware(components.get('middleware')[0]));

		expect(MiddlewareServiceMock.addPreAuthentication).toHaveBeenCalled();
		expect(MiddlewareServiceMock.addPreAuthentication).toHaveBeenCalledWith(expect.any(Function), { app });

		expect(MiddlewareServiceMock.addPostAuthentication).toHaveBeenCalled();
		expect(MiddlewareServiceMock.addPostAuthentication).toHaveBeenCalledWith(expect.any(Function), { app });
	});
});
