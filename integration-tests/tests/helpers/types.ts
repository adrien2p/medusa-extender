import { Express } from "express";
import { Server } from "http";
import { MedusaContainer } from "@medusajs/medusa/dist/types/global";

export type Context = {
	app: Express;
	appListener: Server;
	port: number;
	container: MedusaContainer;
	request: any;
	config: any;
};

export type MakeRequestOptions = {
    method: "get" | "post";
    path: string;
    adminSession?: Record<string, any>;
    clientSession?: Record<string, any>;
    headers?: Record<string, any>;
};