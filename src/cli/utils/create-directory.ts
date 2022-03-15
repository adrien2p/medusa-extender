import { existsSync, mkdirSync } from 'fs';
import { Logger } from "../../core";

export function createDirectoryIfNecessary(relativeDestinationPath: string, fullDestinationPath: string, logger: Logger | typeof console = console): void {
    if (!existsSync(fullDestinationPath)) {
        logger.log(`Creating directory ${fullDestinationPath}.`);
        return mkdirSync(fullDestinationPath);
    }

    logger.log(`Directory ${relativeDestinationPath} already exists. Skipping.`);
}
