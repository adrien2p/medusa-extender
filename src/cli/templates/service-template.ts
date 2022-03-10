import * as dedent from 'dedent';

export function getServiceTemplate(serviceName: string): string {
	return dedent`
        import { Service } from 'medusa-extender';
        import { EntityManager } from 'typeorm';
        
        type ConstructorParams = {
            manager: EntityManager;
        };
        
        @Service({ resolutionKey: '${serviceName}' })
        export class ${serviceName} {
            constructor(private readonly container: ConstructorParams, options: any) {}
        }
    `;
}
