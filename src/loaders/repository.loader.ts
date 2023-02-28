import { GetInjectableOption, GetInjectableOptions, lowerCaseFirst } from './';
import { MedusaContainer } from '@medusajs/medusa/dist/types/global';
import { asClass, asValue } from 'awilix';
import { Logger } from '../core';

const logger = Logger.contextualize('RepositoriesLoader');

export async function repositoryLoader(repositories: GetInjectableOptions<'repository'>): Promise<void> {
	const repoLoader = await import('@medusajs/medusa/dist/loaders/repositories');
	const originalRepoLoader = repoLoader.default;
	repoLoader.default = ({ container }) => {
		originalRepoLoader({ container });
		repositoriesLoader(repositories, container as unknown as MedusaContainer);
		overrideRepositoriesLoader(repositories, container as unknown as MedusaContainer);
	};
}

/**
 * @internal
 * Load all custom repositories into the underlying @medusajs instance.
 * @param repositories
 * @param container
 */
export async function repositoriesLoader(
	repositories: GetInjectableOptions<'repository'>,
	container: MedusaContainer
): Promise<void> {
	logger.log('Loading custom entities into the underlying @medusajs');

	let count = 0;
	for (const repositoryOptions of repositories) {
		if (!repositoryOptions.override) {
			registerRepository(container, repositoryOptions);
			logger.log(`Repository loaded - ${lowerCaseFirst(repositoryOptions.metatype.name)}`);
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
export async function overrideRepositoriesLoader(
	repositories: GetInjectableOptions<'repository'>,
	container: MedusaContainer
): Promise<void> {
	logger.log('Loading overridden entities into the underlying @medusajs');

	let count = 0;
	for (const repositoryOptions of repositories) {
		if (repositoryOptions.override) {
			await overrideRepository(container, repositoryOptions);
			logger.log(`Repository overridden - ${repositoryOptions.metatype.name}`);
			++count;
		}
	}

	logger.log(`${count} repositories overridden`);
}

function registerRepository(container: MedusaContainer, repositoryOptions: GetInjectableOption<'repository'>): void {
	const { metatype: repository } = repositoryOptions;
	const resolutionKey =
		repositoryOptions.resolutionKey ??
		`${lowerCaseFirst(repository.name)}${
			!repository.name.toLowerCase().includes('repository') ? 'Repository' : ''
		}`;
	container.register({
		[resolutionKey]: asClass(repository),
	});
}

function overrideRepository(container: MedusaContainer, repositoryOptions: GetInjectableOption<'repository'>): void {
	const { metatype, repository, override } = repositoryOptions;

	// @ts-ignore
	const { target, manager, queryRunner, ...custom } = repository;

	Object.assign(override, custom);

	const formattedName = lowerCaseFirst(metatype.name);
	container.cache.delete(formattedName);
	container.register(formattedName, asValue(override));
}
