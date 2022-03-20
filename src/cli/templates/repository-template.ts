import * as dedent from 'dedent';
import { lowerCaseFirst } from '../../core';

/**
 * Provide a basic template for the repository component generation.
 * @param repositoryName
 */
export function getRepositoryTemplate(repositoryName: string): string {
	const resolutionKey = lowerCaseFirst(repositoryName);
	return dedent`
        import { Repository as MedusaRepository } from "medusa-extender";
        import { EntityRepository, Repository } from "typeorm";
        
        @MedusaRepository({ resolutionKey: '${resolutionKey}' })
        @EntityRepository(/* Specify your entity */)
        export class ${repositoryName} extends Repository</* Specify your entity */> {}
    `;
}
