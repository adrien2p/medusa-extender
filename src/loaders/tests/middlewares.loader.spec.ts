// TODO fix the fact that medusa is using babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { asValue, createContainer } from 'awilix';
import { Injectable } from '../../decorators/injectable.decorator';
import { MedusaAuthenticatedRequest, MedusaMiddleware } from '../../types';
import { NextFunction, Request, Response } from 'express';
import { middlewaresLoader } from '../middlewares.loader';
import { readMetadatas } from '../../read-metadatas';
import { Module } from '../../decorators/module.decorator';
import { MEDUSA_RESOLVER_KEYS } from '../../contants';
import express = require('express');

const MiddlewareServiceMock = {
	addPreAuthentication: jest.fn(),
	addPostAuthentication: jest.fn(),
};

@Injectable({ type: 'middleware', requireAuth: false, routerOptions: [{ path: '/admin/test', method: 'get' }] })
class PreAuthUserMiddleware implements MedusaMiddleware {
	consume(): (req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction) => void | Promise<void> {
		return function () {
			return undefined;
		};
	}
}

@Injectable({ type: 'middleware', requireAuth: true, routerOptions: [{ path: '/admin/test', method: 'get' }] })
class PostAuthUserMiddleware implements MedusaMiddleware {
	consume(): (req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction) => void | Promise<void> {
		return function () {
			return undefined;
		};
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

		const components = readMetadatas([UserModule]);
		middlewaresLoader(app, container, components.get('middleware'));

		const preAuthUserMiddlewareInstance = new PreAuthUserMiddleware();
		expect(MiddlewareServiceMock.addPreAuthentication).toHaveBeenCalled();
		expect(MiddlewareServiceMock.addPreAuthentication).toHaveBeenCalledWith(preAuthUserMiddlewareInstance.consume, {
			app,
		});

		const postAuthUserMiddlewareInstance = new PostAuthUserMiddleware();
		expect(MiddlewareServiceMock.addPostAuthentication).toHaveBeenCalled();
		expect(MiddlewareServiceMock.addPostAuthentication).toHaveBeenCalledWith(
			postAuthUserMiddlewareInstance.consume,
			{ app }
		);
	});
});
