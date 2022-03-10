import { existsSync } from 'fs';
import { yellow } from 'chalk';

export function doesFileExists(path: string, componentName: string): boolean {
	if (existsSync(path)) {
		console.log(yellow(`${componentName} already exists. Skipping.`));
		return true;
	}

	return false;
}
