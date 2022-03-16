import * as dedent from 'dedent';

/**
 * Provide a basic template for the module component generation.
 * @param moduleName
 */
export function getModuleTemplate(moduleName: string): string {
	return dedent`
        import { Module } from 'medusa-extender';
        
        @Module({
            imports: []
        })
        export class ${moduleName} {}
    `;
}
