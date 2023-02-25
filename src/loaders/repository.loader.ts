import { GetInjectableOption, GetInjectableOptions, lowerCaseFirst } from './';
import { MedusaContainer } from '@medusajs/medusa/dist/types/global';
import { asClass, asFunction, AwilixContainer } from 'awilix';
import { BaseEntity, EntityTarget, getMetadataArgsStorage, Repository } from 'typeorm';
import { Logger } from '../core';

const logger = Logger.contextualize('RepositoriesLoader');

export class MedusaOverrideRepository<EntityType,TargetEntity > extends Repository<EntityType>
{
	constructor(targetEntity:TargetEntity ,repo:Repository<EntityType>)
	{
		super(targetEntity as any,repo.manager,repo.queryRunner);
	}

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
export async function overrideRepositoriesLoader(repositories: GetInjectableOptions<'repository'>,container:AwilixContainer): Promise<void> {
	logger.log('Loading overridden entities into the underlying @medusajs');

	let count = 0;
	for (const repositoryOptions of repositories) {
		if (repositoryOptions.override) {
			await overrideRepository(repositoryOptions,container);
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

async function overrideRepository(repositoryOptions: GetInjectableOption<'repository'>,container:AwilixContainer): Promise<void> {
	
	const { metatype, override,repositoryName } = repositoryOptions;

	const nameParts = repositoryName.split('Repository');
	const keptNameParts = nameParts.length > 1 ? nameParts.splice(nameParts.length - 2, 1) : nameParts;
	const name = keptNameParts.length > 1 ? keptNameParts.join('') : keptNameParts[0];
	const fileFullName = `${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`
	const fileNameParts = fileFullName.split("-")
	let fileName = fileNameParts.length>1? fileNameParts[1]:fileNameParts[0]

	const nameToRegister = `${fileName.charAt(0).toLowerCase() + fileName.slice(1)}Repository`;
	container.register(nameToRegister,asFunction(()=>metatype))
	
 /*
	const originalRepository = await import('@medusajs/medusa/dist/repositories/' + fileName);
	const originalRepositoryIndex = getMetadataArgsStorage().entityRepositories.findIndex((repository) => {
		return repository.target.name === override.name && repository.target !== metatype;
	});
	if (originalRepositoryIndex > -1) {
		getMetadataArgsStorage().entityRepositories.splice(originalRepositoryIndex, 1);
	}
	originalRepository[override.name] = metatype
	*/


}
