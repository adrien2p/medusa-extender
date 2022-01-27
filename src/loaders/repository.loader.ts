import { GetInjectableOption, GetInjectableOptions } from '../types';
import { Utils } from '../utils';
import { asClass, AwilixContainer } from 'awilix';
import { getMetadataArgsStorage } from "typeorm";

export async function repositoriesLoader(repositories: GetInjectableOptions<'repository'>, container: AwilixContainer): Promise<void> {
    for (const repositoryOptions of repositories) {
        if (repositoryOptions.resolutionKey) {
            registerRepository(container, repositoryOptions);
        }
    }
}

export async function overrideRepositoriesLoader(repositories: GetInjectableOptions<'repository'>): Promise<void> {
    for (const repositoryOptions of repositories) {
        if (repositoryOptions.override) {
            await overrideRepository(repositoryOptions);
        }
    }
}

/**
 * @internal
 * Load custom repository into the container.
 * @param container
 * @param repositoryOptions
 */
export function registerRepository(container: AwilixContainer, repositoryOptions: GetInjectableOption<'repository'>) {
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
export async function overrideRepository(
    repositoryOptions: GetInjectableOption<'repository'>
): Promise<void> {
    const { metatype, override } = repositoryOptions;

    const nameParts = override.name.split('Repository');
    const keptNameParts = nameParts.length > 1 ? nameParts.splice(nameParts.length - 2, 1) : nameParts;
    const name = keptNameParts.length > 1 ? keptNameParts.join('') : keptNameParts[0];
    const fileName = `${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;

    const originalRepository = await import('@medusajs/medusa/dist/repositories/' + fileName);
    const originalRepositoryIndex = getMetadataArgsStorage().entityRepositories.findIndex(repository => {
        return repository.target.name === override.name && repository.target !== metatype;
    });
    if (originalRepositoryIndex > -1) {
        getMetadataArgsStorage().entityRepositories.splice(originalRepositoryIndex, 1);
    }
    originalRepository[override.name] = metatype;

    const preparedLog = Utils.prepareLog('MedusaLoader#repositoriesLoader', `Repository overridden - ${metatype.name}`);
    console.log(preparedLog);
}
