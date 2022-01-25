import { GetInjectableOption, GetInjectableOptions } from '../types';
import { Utils } from '../medusa-utils';
import { asClass, AwilixContainer } from 'awilix';

/**
 * @internal
 * Load custom repositories that must override the existing repositories from the rootDir.
 * @param repositories Any custom repository that implements MedusaRepository
 */
export async function overriddenRepositoriesLoader(repositories: GetInjectableOptions<'repository'>): Promise<void> {
	const filteredRepositoriesOptions = repositories.filter((options) => !!options.override);
	for (const options of filteredRepositoriesOptions) {
		await overrideRepository(options);
	}
}

/**
 * @internal
 * Load custom repositories that must be added to the existing container from the rootDir.
 * @param repositories Any custom repository that implements MedusaRepository
 * @param container
 */
export async function repositoriesLoader(
	repositories: GetInjectableOptions<'repository'>,
	container: AwilixContainer
): Promise<void> {
	const filteredRepositoriesOptions = repositories.filter((options) => !options.override);
	for (const options of filteredRepositoriesOptions) {
		await registerRepository(container, options);
	}
}

/**
 * @internal
 * Load custom repository into the container.
 * @param container
 * @param repositoryOptions
 */
function registerRepository(container: AwilixContainer, repositoryOptions: GetInjectableOption<'repository'>) {
	const { resolutionKey, metatype: repository } = repositoryOptions;
	if (!resolutionKey) {
		throw new Error('Missing static property resolutionKey from repository ' + repository.name);
	}

	container.register({
		[resolutionKey]: asClass(repository),
	});

	const preparedLog = Utils.prepareLog('MedusaLoader#repositoriesLoader', `Repository registered - ${resolutionKey}`);
	console.log(preparedLog);
}

/**
 * @internal
 * Load custom repositories and override existing ones.
 * @param repositoryOptions
 */
async function overrideRepository(repositoryOptions: GetInjectableOption<'repository'>): Promise<void> {
	const { metatype: repository, override } = repositoryOptions;
	const nameParts = repository.name.split('Repository');
	const keptNameParts = nameParts.length > 1 ? nameParts.splice(nameParts.length - 2, 1) : nameParts;
	const name = keptNameParts.length > 1 ? keptNameParts.join('') : keptNameParts[0];
	const fileName = `${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;
	const originalEntity = await import('@medusajs/medusa/dist/repositories/' + fileName);
	originalEntity[override.name] = repository;

	const preparedLog = Utils.prepareLog('MedusaLoader#repositoriesLoader', `Repository overridden - ${override.name}`);
	console.log(preparedLog);
}
