import { entitiesLoader, overriddenEntitiesLoader } from "./entities.loader";
import { overriddenRepositoriesLoader, repositoriesLoader } from "./repository.loader";
import { MedusaEntityStatic, MedusaRepositoryStatic } from "../types";

/**
 * @internal
 * decorate the original database loader to register our custom entities and repositories first.
 * @param entities Custom entities
 * @param repositories Custom repositories
 */
export async function databaseLoader(entities: MedusaEntityStatic[], repositories: MedusaRepositoryStatic[]): Promise<void> {
    const databaseLoader = await import('@medusajs/medusa/dist/loaders/database');
    const originalDatabaseLoader = databaseLoader.default;
    databaseLoader.default = async ({ container, configModule }) => {
        await entitiesLoader(
            entities.filter((e) => e.isHandledByMedusa && !e.overriddenType),
            container
        );
        await repositoriesLoader(
            repositories.filter((r) => r.isHandledByMedusa && !r.overriddenType),
            container
        );
        return await originalDatabaseLoader({
            container,
            configModule,
        });
    };
}