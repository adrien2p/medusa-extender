import { OpenAPI } from 'openapi-types';
import { Express, NextFunction, Request, Response } from 'express';
import { loadPackages } from "../core";

export interface MonitoringOptions {
	version?: string;
	hostname?: string;
	ip?: string;
	timelineBucketDuration?: number;
	swaggerSpec?: string | OpenAPI.Document;
	uriPath: string;
	durationBuckets?: number[];
	requestSizeBuckets?: number[];
	responseSizeBuckets?: number[];
	apdexThreshold?: number;
	onResponseFinish?: (req: Request, res: Response, next: NextFunction) => void | Promise<void>;
	authentication?: boolean;
	sessionMaxAge?: number;
	elasticsearch?: string;
	onAuthenticate?: (req: Request, username: string, password: string) => boolean | Promise<boolean>;
}

export async function buildMonitoringModule(app: Express, options: MonitoringOptions) {
	await loadPackages('Monitoring module', [
		{ name: 'prom-client', version: '12.0.0' },
		{ name: 'swagger-parser', version: '10.0.3' },
		{ name: 'swagger-stats', version: '0.99.2' }
	]);
	// @ts-ignore
	const swStats = await import('swagger-stats');

	options = {
		...options,
		name: 'Medusa-extender monitoring Dashboard',
	} as MonitoringOptions & { name: string };

	if (options.swaggerSpec && typeof options.swaggerSpec === 'string') {
		// @ts-ignore
		const { default: swaggerParser } = await import('swagger-parser');
		const parser = new swaggerParser();
		parser.validate(options.swaggerSpec, (err, api) => {
			const swaggerSpec = api;
			app.use(swStats.getMiddleware({ ...options, swaggerSpec }));
		});
		return;
	}

	app.use(swStats.getMiddleware(options));
}