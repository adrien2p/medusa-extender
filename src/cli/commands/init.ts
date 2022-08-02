import * as dedent from 'dedent';
import { resolve } from 'path';
import { loadPackages, Logger } from '../../core';
import { existsSync, writeFileSync } from 'fs';
import { generateComponent } from './generate-component';
import { getMainEntryPointTemplate } from '../templates';

const logger = Logger.contextualize('Init command', 'MEDEX-CLI');

/**
 * Update or create everything related to medusa-extender in an existing medusa project.
 */
export async function init(): Promise<void> {
	logger.log('Initialising medusa-extender...');

	logger.log('[Packages] Check that the packages are installed');
	await loadPackages(logger, [
		{ name: 'typescript', version: '4.5.5', isDevDependency: true },
		{ name: 'nodemon', version: '2.0.15', isDevDependency: true },
	]);

	await updatePackageJson();
	await updateTsconfigJson();

	logger.log('[Modules] Creating example module');
	generateComponent('example', { module: true, service: true, router: true, path: 'src/modules/example' });

	generateEntryPoint();
	updateDevelopScript();

	logger.log('Initialisation terminated successfully. You can now run the script - npm run start');
}

/**
 * @internal
 * Update the package.json with the required scripts to work.
 */
async function updatePackageJson(): Promise<void> {
	logger.log('[Scripts] Update package.json scripts');
	const packageJsonPath = resolve(process.cwd(), 'package.json');
	const packageJson = await import(packageJsonPath);
	packageJson.scripts = {
		...(packageJson.scripts ?? {}),
		build: 'rm -rf dist && ./node_modules/.bin/tsc -p tsconfig.json',
		start: 'npm run build && NODE_ENV=development node ./dist/main.js',
		'start:watch':
			"nodemon --watch './src/**/*.ts' --exec 'npm run build && NODE_ENV=development node ./dist/main.js'",
		'start:prod': 'npm run build && NODE_ENV=production node dist/main',
	};
	writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 4));
}

/**
 * @internal
 * Update or create the tsconfig.json file with the required configuration.
 */
async function updateTsconfigJson(): Promise<void> {
	logger.log('[TsConfig] Create or update tsconfig.json');
	const tsconfigPath = resolve(process.cwd(), 'tsconfig.json');
	const isTsConfigExists = existsSync(tsconfigPath);
	if (!isTsConfigExists) {
		logger.log('[tsconfig.json] Creating tsconfig.json');
		writeFileSync(
			tsconfigPath,
			dedent`
            {
              "compilerOptions": {
                "module": "CommonJS",
                "declaration": true,
                "emitDecoratorMetadata": true,
                "experimentalDecorators": true,
                "allowSyntheticDefaultImports": true,
                "moduleResolution": "node",
                "target": "es2017",
                "sourceMap": true,
                "skipLibCheck": true,
                "allowJs": true,
                "outDir": "dist",
                "rootDir": "src",
                "esModuleInterop": true
              },
              "include": [
                "src"
              ],
              "exclude": [
                "dist",
                "node_modules",
                "**/*.spec.ts"
              ]
            }
        `
		);
	} else {
		logger.log('[tsconfig.json] Update tsconfig.json');
		const tsconfig = await import(tsconfigPath);
		tsconfig.compilerOptions = {
			...(tsconfig.compilerOptions ?? {}),
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
		};
		tsconfig.include = [...(tsconfig.include ?? []), 'src'];
		tsconfig.exclude = [...(tsconfig.exclude ?? []), 'dist', 'node_modules', '**/*.spec.ts'];
		writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 4));
	}
}

/**
 * @internal
 * Generate the main.ts entry point.
 */
function generateEntryPoint(): void {
	logger.log('[Entry point] Creating entry point main.ts file');
	writeFileSync(resolve(process.cwd(), 'src', 'main.ts'), getMainEntryPointTemplate());
}

/**
 * @internal
 * Update the existing develop shell script provided by medusa to fit the new requirements.
 */
function updateDevelopScript(): void {
	logger.log('[Develop script] Update medusa develop.sh script');
	const developShPath = resolve(process.cwd(), 'develop.sh');
	writeFileSync(
		developShPath,
		dedent`
		#!/bin/bash

		#Run migrations to ensure the database is updated
		medusa migrations run
		
		#Start development environment
		npm run start
	`,
		{ mode: 777 }
	);
}
