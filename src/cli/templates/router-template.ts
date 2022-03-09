import * as dedent from 'dedent';

export function getRouterTemplate(routerName: string): string {
	return dedent`
        import { Router } from 'medusa-extender';
        
        @Router({
            requireAuth: true,
            path: '',
            method: '',
            handlers: [] 
        })
        export class ${routerName} {}
    `;
}
