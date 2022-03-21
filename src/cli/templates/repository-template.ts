import * as dedent from 'dedent';

/**
 * Provide a basic template for the repository component generation.
 * @param repositoryName
 */
export function getRepositoryTemplate(repositoryName: string): string {
	return dedent`
        import { Repository as MedusaRepository } from "medusa-extender";
        import { EntityRepository, Repository } from "typeorm";
        
        @MedusaRepository()
        @EntityRepository(/* Specify your entity */)
        export class ${repositoryName} extends Repository</* Specify your entity */> {}
    `;
}
