import * as dedent from 'dedent';

export function getModuleTemplate(moduleName: string): string {
	return dedent`
        import { Module } from 'medusa-extender';
        
        @Module({
            imports: []
        })
        export class ${moduleName} {}
    `;
}
