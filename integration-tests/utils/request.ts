import jwt from 'jsonwebtoken';
import { Context, MakeRequestOptions } from './types';

export function makeRequest({ request, config }: Context, options: MakeRequestOptions) {
	const { headers = {}, method, path, body } = options;

	let req;
	if (method.toLowerCase() === 'post') {
		req = request[method.toLowerCase()](path).send(body);
	} else {
		req = request[method.toLowerCase()](path);
	}

	headers.Cookie = headers.Cookie || '';
	if (options.adminSession) {
		if (options?.adminSession?.jwt) {
			options.adminSession.jwt = jwt.sign(options.adminSession.jwt, config.projectConfig.jwt_secret);
		}
		headers.Cookie = JSON.stringify(options.adminSession) || '';
	}
	if (options.clientSession) {
		if (options.clientSession.jwt) {
			options.clientSession.jwt = jwt.sign(options.clientSession.jwt, config.projectConfig.jwt_secret);
		}

		headers.Cookie = JSON.stringify(options.clientSession) || '';
	}

	for (const name in headers) {
		req.set(name, headers[name]);
	}

	return req;
}
