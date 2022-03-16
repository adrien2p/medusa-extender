import { existsSync, mkdirSync } from 'fs';
import { Logger } from '../../core';

/**
 * Create the new directory, if necessary, that will receive the components.
 * @param relativeDestinationPath
 * @param fullDestinationPath
 * @param logger
 */
export function createDirectoryIfNecessary(
	relativeDestinationPath: string,
	fullDestinationPath: string,
	logger: Logger | typeof console = console
): void {
	if (existsSync(fullDestinationPath)) {
		logger.log(`Directory ${relativeDestinationPath} already exists. Skipping directory creation`);
		return;
	}

	logger.log(`Creating directory ${fullDestinationPath}`);
	mkdirSync(fullDestinationPath, { recursive: true });
}
