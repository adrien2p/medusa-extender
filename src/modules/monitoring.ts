import * as swStats from 'swagger-stats';
import { OpenAPI } from "openapi-types";
import { Express, NextFunction, Request, Response } from "express";

export interface MonitoringOptions {
    name: string;
    version: string;
    hostname: string;
    ip: string;
    timelineBucketDuration: number;
    swaggerSpec: string | OpenAPI.Document;
    uriPath: string;
    durationBuckets: number[];
    requestSizeBuckets: number[];
    responseSizeBuckets: number[];
    apdexThreshold: number;
    onResponseFinish: (req: Request, res: Response, next: NextFunction) => void | Promise<void>;
    authentication: boolean;
    sessionMaxAge: number;
    elasticsearch: string;
    onAuthenticate: (req: Request, username: string, password: string) => boolean | Promise<boolean>;
}

export async function buildMonitoringMiddleware(app: Express, options: MonitoringOptions) {
    if (options.swaggerSpec && typeof options.swaggerSpec === 'string') {
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