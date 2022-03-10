import * as path from 'path';
import { exec } from 'child_process';
import * as dedent from 'dedent';

function cli(args, cwd): Promise<{ code: number; error: any; stdout: any; stderr: any }> {
	return new Promise((resolve) => {
		exec(`node ${path.resolve('./dist/cli/index')} ${args.join(' ')}`, { cwd }, (error, stdout, stderr) => {
			resolve({
				code: error && error.code ? error.code : 0,
				error,
				stdout,
				stderr,
			});
		});
	});
}

describe('CLI', () => {
	it('should failed on missing command', async () => {
		const { error, stderr } = await cli([''], '.');
		expect(error.code).toBe(1);
		expect(stderr.trim()).toBe(dedent`
            Usage: medex [options] [command]
            
            Medusa extender CLI
            
            Options:
              -V, --version       output the version number
              -h, --help          display help for command
            
            Commands:
              generate [options]  Generate a new component
              help [command]      display help for command
        `);
	});

	it('should failed on missing options', async () => {
		const { error, stderr } = await cli(['generate'], '.');
		expect(error.code).toBe(1);
		expect(stderr.trim()).toBe(dedent`
            You must specify one of the options.

            Usage: medex generate [options]
            
            Generate a new component
            
            Options:
              -m, --module <string>       Generate a new module with the specified name.
                                          The name must include the relative path where the
                                          component must be generated.
              -md, --middleware <string>  Generate a new middleware with the specified
                                          name. The name must include the relative path
                                          where the component must be generated.
              -s, --service <string>      Generate a new service with the specified name.
                                          The name must include the relative path where the
                                          component must be generated.
              -r, --router <string>       Generate a new router with the specified name.
                                          The name must include the relative path where the
                                          component must be generated.
              -e, --entity <string>       Generate a new entity with the specified name.
                                          The name must include the relative path where the
                                          component must be generated.
              -re, --repository <string>  Generate a new repository with the specified
                                          name. The name must include the relative path
                                          where the component must be generated.
              -mi, --migration <string>   Generate a new migration with the specified name.
                                          The name must include the relative path where the
                                          component must be generated.
              -va, --validator <string>   Generate a new validator with the specified name.
                                          The name must include the relative path where the
                                          component must be generated.
              -h, --help                  display help for command
        `);
	});

	it('should failed on missing options value', async () => {
		const { error, stderr } = await cli(['generate -m'], '.');
		expect(error.code).toBe(1);
		expect(stderr.trim()).toBe(dedent`
            error: option '-m, --module <string>' argument missing
        `);
	});
});
