import * as dedent from 'dedent';
import { lowerCaseFirst } from '../../core';

/**
 * Provide a basic template for the service component generation.
 * @param serviceName
 */
export function getServiceTemplate(serviceName: string): string {
	const resolutionKey = lowerCaseFirst(serviceName);
	return dedent`
        import { Service } from 'medusa-extender';
        import { EntityManager } from 'typeorm';
        
        type ContainerInjection = {
            manager: EntityManager;
        };
        
        @Service({ resolutionKey: '${resolutionKey}' })
        export class ${serviceName} {
        	static readonly resolutionKey = '${resolutionKey}';
        	
            constructor(private readonly container: ContainerInjection, private readonly config: any) {}
        }
    `;
}
