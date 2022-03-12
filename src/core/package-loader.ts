import { execSync } from 'child_process';
import { detect } from 'detect-package-manager';
import { resolve } from 'path';
import { Logger } from './logger';
const packageJson = require('../../package.json');

/**
 * @Internal
 * Load packages at run time.
 * @param logger
 * @param packages The packages descriptors that must be installed
 */
export async function loadPackages(logger: Logger, packages: { name: string; version: string }[]): Promise<void> {
	const installCommand = await getPackageManagerCommand();
	for (const { name, version } of packages) {
		if (packageJson.dependencies[name]) {
		}
		logger.log(`[Installing ${name}:${version}...`);
		try {
			execSync(`${installCommand} ${name}@${version}`, { cwd: resolve(__dirname, '../../') });
		} catch (e) {
			console.error(`Unable to install ${name}@${version}.`);
			process.exit(1);
		}
	}
}

/**
 * @Internal
 * Return the install command from the user package manager.
 */
export async function getPackageManagerCommand(): Promise<string | never> {
	const packageManager = await detect({ cwd: process.cwd() });
	const installCmd =
		packageManager === 'npm'
			? 'npm i'
			: packageManager === 'yarn'
			? 'yarn'
			: packageManager === 'pnpm'
			? 'pnpm add'
			: null;
	if (!installCmd) {
		throw new Error('Unable to find the package manager to use (npm, yarn, pnpm, ...).');
	}
	return installCmd;
}
