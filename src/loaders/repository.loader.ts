import { MedusaRepositoryStatic } from '../types';
import { Utils } from '../medusa-utils';
import { asClass, AwilixContainer } from 'awilix';

/**
 * @internal
 * Load custom repositories that must override the existing repositories from the rootDir.
 * @param repositories Any custom repository that implements MedusaRepository
 */
export async function overriddenRepositoriesLoader(repositories: MedusaRepositoryStatic[]): Promise<void> {
	return load(repositories);
}

/**
 * @internal
 * Load custom repositories that must be added to the existing container from the rootDir.
 * @param repositories Any custom repository that implements MedusaRepository
 * @param container
 */
export async function repositoriesLoader(
	repositories: MedusaRepositoryStatic[],
	container: AwilixContainer
): Promise<void> {
	return load(repositories, container);
}

/**
 * @internal
 * Load custom repositories add override existing one or add them to the container.
 * @param repositories Any custom repository that implements MedusaRepository
 * @param container
 */
async function load(repositories: MedusaRepositoryStatic[], container?: AwilixContainer): Promise<void> {
	for (const repository of repositories) {
		if (repository.isHandledByMedusa) {
			if (!repository.overriddenType) {
				await registerRepository(container, repository);
			} else {
				await overrideRepository(repository);
			}
		}
	}
}

/**
 * @internal
 * Load custom repositories into the container.
 * @param container
 * @param repository
 */
function registerRepository(container: AwilixContainer, repository: MedusaRepositoryStatic) {
	if (!repository.resolutionKey) {
		throw new Error('Missing static property resolutionKey from repository ' + repository.name);
	}

	const registerRepositoryName = repository.resolutionKey;
	container.register({
		[registerRepositoryName]: asClass(repository),
	});

	const preparedLog = Utils.prepareLog(
		'MedusaLoader#repositoriesLoader',
		`Repository registered - ${repository.resolutionKey}`
	);
	console.log(preparedLog);
}

/**
 * @internal
 * Load custom repositories and override existing ones.
 * @param repository
 */
async function overrideRepository(repository: MedusaRepositoryStatic): Promise<void> {
	const nameParts = repository.name.split('Repository');
	const keptNameParts = nameParts.length > 1 ? nameParts.splice(nameParts.length - 2, 1) : nameParts;
	const name = keptNameParts.length > 1 ? keptNameParts.join('') : keptNameParts[0];
	const fileName = `${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;
	const originalEntity = await import('@medusajs/medusa/dist/repositories/' + fileName);
	originalEntity[repository.overriddenType.name] = repository;

	const preparedLog = Utils.prepareLog(
		'MedusaLoader#repositoriesLoader',
		`Repository overridden - ${repository.overriddenType.name}`
	);
	console.log(preparedLog);
}
