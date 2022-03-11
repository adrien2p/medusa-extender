import * as path from 'path';
import { exec } from 'child_process';
import * as dedent from 'dedent';

jest.setTimeout(10000);

function cli(args, cwd): Promise<{ code: number; error: any; stdout: any; stderr: any }> {
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

function normalizeString(str: string): string {
	return dedent(str).replace(/r?\n|\r|\t|\s/g, '');
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
				-V, --version         output the version number
				-h, --help            display help for command
			
			Commands:
				migrate|m [options]   Migrate all migrations from ['src/**/*.migration.js',
									  'src/**/migrations/*.js', 'dist/**/*.migration.js',
									  'dist/**/migrations/*.js']
				generate|g [options]  Generate a new component
				help [command]        display help for command
        `)
		);
	});

	it('should failed on generate command with missing options', async () => {
		const { error, stderr } = await cli(['generate'], '.');
		expect(error.code).toBe(1);
		expect(normalizeString(stderr)).toBe(
			normalizeString(`
            You must specify one of the options.

            Usage: medex generate|g [options]
            
            Generate a new component
            
            Options:
              -m, --module <name>       Generate a new module
              -md, --middleware <name>  Generate a new middleware
              -s, --service <name>      Generate a new service
              -r, --router <name>       Generate a new router
              -e, --entity <name>       Generate a new entity
              -re, --repository <name>  Generate a new repository
              -mi, --migration <name>   Generate a new migration
              -va, --validator <name>   Generate a new validator
              -p, --path <path>			specify the path where the component must be generated (by default the component will be generated at [src/modules/<name>/<name>.<type>.ts]
              -h, --help                display help for command
        `)
		);
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
			  -r, --run   Run migrations up method
			  -s, --show  Show all applied and non applied migrations
			  -h, --help  display help for command
        `)
		);
	});

	it('should failed on generate command with missing options value', async () => {
		const { error, stderr } = await cli(['generate -m'], '.');
		expect(error.code).toBe(1);
		expect(normalizeString(stderr)).toBe(
			normalizeString(`
            error: option '-m, --module <name>' argument missing
        `)
		);
	});
});
