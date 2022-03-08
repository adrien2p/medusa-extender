import { execSync } from 'child_process';
import { detect } from 'detect-package-manager';

/**
 * @Internal
 *
 * Load packages at run time.
 * @param context The context string description for which it is executed
 * @param packages The packages descriptors that must be installed
 */
export async function loadPackages(context: string, packages: { name: string; version: string }[]): Promise<void> {
	const installCommand = await getPackageManagerCommand();
	for (const { name, version } of packages) {
		console.info(`[${context}] Installing ${name}:${version}...`);
		try {
			execSync(`${installCommand} ${name}@${version}`, { cwd: process.cwd() });
		} catch (e) {
			console.error(`Unable to install ${name}@${version}.`);
			process.exit(1);
		}
	}
}

/**
 * @Internal
 *
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
