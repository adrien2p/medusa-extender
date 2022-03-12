import { GetInjectableOption, GetInjectableOptions } from './';
import { asClass, AwilixContainer } from 'awilix';
import { getMetadataArgsStorage } from 'typeorm';
import { Logger } from '../core/logger';

const logger = Logger.contextualize('RepositoriesLoader');

/**
 * @internal
 * Load all custom repositories into the underlying @medusajs instance.
 * @param repositories
 * @param container
 */
export async function repositoriesLoader(
	repositories: GetInjectableOptions<'repository'>,
	container: AwilixContainer
): Promise<void> {
	logger.log('Loading custom entities into the underlying @medusajs');

	let count = 0;
	for (const repositoryOptions of repositories) {
		if (repositoryOptions.resolutionKey) {
			registerRepository(container, repositoryOptions);
			logger.log(`Repository loaded - ${repositoryOptions.resolutionKey}`);
			++count;
		}
	}

	logger.log(`${count} repositories registered`);
}

/**
 * @internal
 * Load all custom repositories that override @medusajs instance entities.
 * @param repositories
 */
export async function overrideRepositoriesLoader(repositories: GetInjectableOptions<'repository'>): Promise<void> {
	logger.log('Loading overridden entities into the underlying @medusajs');

	let count = 0;
	for (const repositoryOptions of repositories) {
		if (repositoryOptions.override) {
			await overrideRepository(repositoryOptions);
			logger.log(`Repository overridden - ${repositoryOptions.metatype.name}`);
			++count;
		}
	}

	logger.log(`${count} entities overridden`);
}

function registerRepository(container: AwilixContainer, repositoryOptions: GetInjectableOption<'repository'>) {
	const { resolutionKey, metatype: repository } = repositoryOptions;
	if (!resolutionKey) {
		throw new Error('Missing static property resolutionKey from repository ' + repository.name);
	}

	container.register({
		[resolutionKey]: asClass(repository),
	});
}

async function overrideRepository(repositoryOptions: GetInjectableOption<'repository'>): Promise<void> {
	const { metatype, override } = repositoryOptions;

	const nameParts = override.name.split('Repository');
	const keptNameParts = nameParts.length > 1 ? nameParts.splice(nameParts.length - 2, 1) : nameParts;
	const name = keptNameParts.length > 1 ? keptNameParts.join('') : keptNameParts[0];
	const fileName = `${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;

	const originalRepository = await import('@medusajs/medusa/dist/repositories/' + fileName);
	const originalRepositoryIndex = getMetadataArgsStorage().entityRepositories.findIndex((repository) => {
		return repository.target.name === override.name && repository.target !== metatype;
	});
	if (originalRepositoryIndex > -1) {
		getMetadataArgsStorage().entityRepositories.splice(originalRepositoryIndex, 1);
	}
	originalRepository[override.name] = metatype;
}
