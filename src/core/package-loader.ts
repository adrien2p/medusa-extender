import { execSync } from 'child_process';
import { detect } from 'detect-package-manager';
import { Logger } from './logger';
import { writeFileSync } from 'fs';

/**
 * @Internal
 * Load packages at run time.
 * @param logger
 * @param packages The packages descriptors that must be installed
 */
export async function loadPackages(
	logger: Logger,
	packages: { name: string; version: string; isDevDependency?: boolean }[]
): Promise<void> {
	logger.log('Installing the necessary packages if they are not already installed');

	const installCommand = await getPackageManagerCommand();
	for (const { name, version, isDevDependency } of packages) {
		const packageJson = await import(`${process.cwd()}/package.json`);

		if (packageJson.dependencies[name]) {
			logger.log(`Skipping installation of ${name}@${version}. package already installed`);
			continue;
		}

		logger.log(`Installing ${name}@${version}...`);
		try {
			execSync(`${installCommand} ${isDevDependency ? '-D' : ''} ${name}@${version}`, {
				cwd: process.cwd(),
				env: process.env,
			});
			if (isDevDependency) {
				packageJson.devDependencies[name] = `^${version}`;
			} else {
				packageJson.dependencies[name] = `^${version}`;
			}
			writeFileSync(`${process.cwd()}/package.json`, JSON.stringify(packageJson, null, 2));
		} catch (e) {
			logger.error(`Unable to install ${name}@${version}`);
			process.exit(1);
		}
	}

	logger.log('Packages installed');
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
