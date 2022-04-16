import * as path from 'path';
import { exec, ExecException } from 'child_process';
import { normalizeString } from './__utils__/normalizeString';

function cli(args, cwd): Promise<{ code: number; error: ExecException; stdout: string; stderr: string }> {
	return new Promise((resolve) => {
		exec(
			`${process.cwd()}/node_modules/.bin/ts-node ${path.resolve(__dirname, '../index.ts')} ${args.join(' ')}`,
			{ cwd },
			(error, stdout, stderr) => {
				resolve({
					code: error && error.code ? error.code : 0,
					error,
					stdout,
					stderr,
				});
			}
		);
	});
}

describe('CLI', () => {
	it('should failed on missing command', async () => {
		const { error, stderr } = await cli([''], '.');
		expect(error.code).toBe(1);
		expect(normalizeString(stderr)).toBe(
			normalizeString(`
            Usage: medex [options] [command]

			Medusa extender CLI
			
			Options:
				-V, --version               output the version number
				-h, --help                  display help for command
			
			Commands:
				migrate|m [options]         Migrate all migrations from ['src/**/*.migration.js',
									        'src/**/migrations/*.js', 'dist/**/*.migration.js',
									        'dist/**/migrations/*.js']
				generate|g [options] <name> Generate a new component
			    init|-i                     Update your existing medusa project to include the necessary configuration to use the medusa-extender package
				help [command]              display help for command
        `)
		);
	});

	it('should failed on generate command with missing options', async () => {
		const { error, stderr } = await cli(['generate name'], '.');
		expect(error.code).toBe(1);
		expect(normalizeString(stderr)).toBe(
			normalizeString(`
            You must specify one of the options.
            
            Usage: medex generate|g [options] <name>
            
            Generate a new component
            
            Arguments:
              name               specify the name of the component(s) to create
            
            Options:
              -m, --module       Generate a new module
              -md, --middleware  Generate a new middleware
              -s, --service      Generate a new service
              -r, --router       Generate a new router
              -e, --entity       Generate a new entity
              -re, --repository  Generate a new repository
              -mi, --migration   Generate a new migration
              -va, --validator   Generate a new validator
              -p, --path <path>  specify the path where the component must be generated (by default the component will be generated at [src/modules/<name>/<name>.<type>.ts]
              -h, --help         display help for command
        `)
		);
	});

	it('should failed on generate command with missing argument', async () => {
		const { error, stderr } = await cli(['generate -m'], '.');
		expect(error.code).toBe(1);
		expect(normalizeString(stderr)).toBe(normalizeString("error: missing required argument 'name'"));
	});

	it('should failed on migrate command with missing options', async () => {
		const { error, stderr } = await cli(['migrate'], '.');
		expect(error.code).toBe(1);
		expect(normalizeString(stderr)).toBe(
			normalizeString(`
            You must specify one of the options.

			Usage: medex migrate|m [options]
			
			Migrate all migrations from ['src/**/*.migration.js', 'src/**/migrations/*.js', 'dist/**/*.migration.js', 'dist/**/migrations/*.js']
			
			Options:
			  -r, --run     Run migrations up method
			  -u, --revert  Revert the last migrations
			  -s, --show    Show all applied and non applied migrations
			  -h, --help    display help for command
        `)
		);
	});
});
