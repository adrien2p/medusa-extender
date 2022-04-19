import * as dedent from 'dedent';
import { lowerCaseFirst } from '../../core';

/**
 * Provide a basic template for the service component generation.
 * @param serviceName
 */
export function getServiceTemplate(serviceName: string): string {
	const resolutionKey = lowerCaseFirst(serviceName);
	return dedent`
		import { BaseService } from "medusa-interfaces";
        import { Service } from 'medusa-extender';
        import { EntityManager } from 'typeorm';
        
        type InjectedDependencies = {
            manager: EntityManager;
        };
        
        @Service()
        export class ${serviceName} extends BaseService {
        	static resolutionKey = '${resolutionKey}';
        	
        	private readonly manager: EntityManager;
	
            constructor({ manager }: InjectedDependencies, private readonly config: any) {
            	super();
            	
            	this.manager = manager;
            }
        }
    `;
}
