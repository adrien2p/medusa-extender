import * as dedent from 'dedent';

/**
 * Provide a basic template for the main entry point file generation.
 */
export function getMainEntryPointTemplate(): string {
	return dedent`
        import express = require('express');
        const config = require('../medusa-config');
        import { Medusa } from 'medusa-extender';
        import { resolve } from 'path';
        import { ExampleModule } from './modules/example/example.module';
        
        async function bootstrap() {
            const expressInstance = express();
            
            await new Medusa(resolve(__dirname, '..'), expressInstance).load([ExampleModule]);
            
            const port = config?.serverConfig?.port ?? 9000;
            expressInstance.listen(port, () => {
                console.info('Server successfully started on port ' + config.serverConfig.port);
            });
        }
        
        bootstrap();
    `;
}
