import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { init } from '../../commands/init';
import * as process from 'process';
import * as packageLoader from '../../../core/package-loader';
import { normalizeString } from '../__utils__/normalizeString';

const fakeProjectPath = resolve(__dirname, '..', 'fakeProject');
const mockProcess = jest.spyOn(process, 'cwd').mockReturnValue(fakeProjectPath);
const loadPackagesMock = jest.spyOn(packageLoader, 'loadPackages').mockImplementation(() => void 0);

const initialPackageJson = { scripts: {}, dependencies: {}, devDependencies: {} };

describe('Init command', () => {
	beforeAll(() => {
		mkdirSync(fakeProjectPath, { recursive: true });
		writeFileSync(resolve(fakeProjectPath, 'package.json'), JSON.stringify(initialPackageJson, null, 4));
		writeFileSync(resolve(fakeProjectPath, 'package-lock.json'), JSON.stringify({}, null, 4));
		mkdirSync(resolve(fakeProjectPath, 'src'));
	});

	afterAll(() => {
		rmSync(fakeProjectPath, { recursive: true });
		mockProcess.mockClear();
	});

	it('should update the setup of the actual project to use the medusa-extender', async () => {
		await init();

		expect(existsSync(resolve(fakeProjectPath, 'tsconfig.json'))).toBeTruthy();
		const tsconfigJson = await import(resolve(fakeProjectPath, 'tsconfig.json'));
		expect(tsconfigJson).toEqual(
			expect.objectContaining({
				compilerOptions: {
					module: 'CommonJS',
					declaration: true,
					emitDecoratorMetadata: true,
					experimentalDecorators: true,
					allowSyntheticDefaultImports: true,
					moduleResolution: 'node',
					target: 'es2017',
					sourceMap: true,
					skipLibCheck: true,
					allowJs: true,
					outDir: 'dist',
					rootDir: 'src',
					esModuleInterop: true,
				},
				include: ['src'],
				exclude: ['dist', 'node_modules', '**/*.spec.ts'],
			})
		);

		expect(loadPackagesMock).toHaveBeenCalledWith(expect.anything(), [
			{ name: 'typescript', version: '4.5.5', isDevDependency: true },
			{ name: 'nodemon', version: '2.0.15', isDevDependency: true },
			{ name: 'ts-node', version: '10.7.0', isDevDependency: true },
		]);

		const packageJson = await import(resolve(fakeProjectPath, 'package.json'));
		expect(packageJson).not.toEqual(initialPackageJson);
		expect(packageJson.scripts).toEqual(
			expect.objectContaining({
				build: 'rm -rf dist && ./node_modules/.bin/tsc -p tsconfig.json',
				start: 'npm run build && NODE_ENV=development node ./dist/main.js',
				'start:watch': "nodemon --watch './src/**/*.ts' --exec 'ts-node' ./src/main.ts",
				'start:prod': 'npm run build && NODE_ENV=production node dist/main',
			})
		);

		const mainFileContent = readFileSync(resolve(__dirname, '..', 'fakeProject', 'src', 'main.ts')).toString();
		expect(normalizeString(mainFileContent)).toBe(
			normalizeString(`
            import express = require('express');
			const config = require('../medusa-config');
			import { Medusa } from 'medusa-extender';
			import { resolve } from 'path';
			import { ExampleModule } from './modules/example/example.module';
			
			async function bootstrap() {
				const expressInstance = express();
				
				await new Medusa(resolve(__dirname, '..'), expressInstance).load([ExampleModule]);
				
				const port = config?.serverConfig?.port ?? 9000;
				expressInstance.listen(port, () => {
					console.info('Server successfully started on port ' + port);
				});
			}
			
			bootstrap();
        `)
		);

		const developShContent = readFileSync(resolve(__dirname, '..', 'fakeProject', 'develop.sh')).toString();
		expect(normalizeString(developShContent)).toBe(
			normalizeString(`
            #!/bin/bash

            #Run migrations to ensure the database is updated
            medusa migrations run
            
            #Start development environment
            npm run start
        `)
		);

		expect(existsSync(resolve(__dirname, '..', 'fakeProject', 'src', 'modules', 'example'))).toBe(true);
		expect(
			existsSync(resolve(__dirname, '..', 'fakeProject', 'src', 'modules', 'example', 'example.module.ts'))
		).toBe(true);
		expect(
			existsSync(resolve(__dirname, '..', 'fakeProject', 'src', 'modules', 'example', 'example.service.ts'))
		).toBe(true);
		expect(
			existsSync(resolve(__dirname, '..', 'fakeProject', 'src', 'modules', 'example', 'example.router.ts'))
		).toBe(true);
	});
});
