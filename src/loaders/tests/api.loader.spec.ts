// TODO fix the fact that medusa is using babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import express = require('express');
import { apiLoader } from '../api.loader';
import { middlewaresLoader } from '../middlewares.loader';

import { default as medusaApiLoader } from '@medusajs/medusa/dist/loaders/api';
import { createContainer } from 'awilix';

jest.mock('@medusajs/medusa/dist/loaders/api');
jest.mock('../middlewares.loader');

describe('API loader', () => {
	const expressInstance = express();
	const cradle = { app: expressInstance, rootDirectory: '', container: createContainer() };

	it('should call original api loader', () => {
		apiLoader(expressInstance);
		medusaApiLoader(cradle);
		expect(medusaApiLoader).toHaveBeenCalled();
	});

	it('should call middlewaresLoader', () => {
		apiLoader(expressInstance);
		medusaApiLoader(cradle);
		expect(middlewaresLoader).toHaveBeenCalled();
	});
});
