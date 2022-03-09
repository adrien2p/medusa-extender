import { existsSync, mkdirSync } from 'fs';
import { blue, yellow } from 'chalk';

export function createDirectoryIfNecessary(relativeDestinationPath: string, fullDestinationPath: string): void {
	if (!existsSync(fullDestinationPath)) {
		console.info(blue(`Creating directory ${fullDestinationPath}.`));
		return mkdirSync(fullDestinationPath);
	}

	console.info(yellow(`Directory ${relativeDestinationPath} already exists. Skipping.`));
}
