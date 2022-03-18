import * as dedent from 'dedent';

/**
 * Provide a basic template for the service component generation.
 * @param serviceName
 */
export function getServiceTemplate(serviceName: string): string {
	const resolutionKey = serviceName.charAt(0).toLowerCase() + serviceName.slice(1, -1);
	return dedent`
        import { Service } from 'medusa-extender';
        import { EntityManager } from 'typeorm';
        
        type ContainerInjection = {
            manager: EntityManager;
        };
        
        @Service({ resolutionKey: '${resolutionKey}' })
        export class ${serviceName} {
        	static resolutionKey = ${resolutionKey};
        	
            constructor(private readonly container: ContainerInjection, config: any) {}
        }
    `;
}
