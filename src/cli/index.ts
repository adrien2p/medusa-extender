#! /usr/bin/env node

import { Command } from 'commander';
import { GenerateCommandOptions, generateComponent } from './commands/generate-component';
import { green } from 'chalk';
import { migrate } from './commands/migrate';
import { init } from './commands/init';

const program = new Command();
program.name('medex').description('Medusa extender CLI').version('0.8.1');

program
	.command('migrate')
	.alias('m')
	.description('Migrate all migrations found in the specified directories in the configuration')
	.option('-r, --run', 'Run migrations up method')
	.option('-u, --revert', 'Revert the last migrations')
	.option('-s, --show', 'Show all applied and non applied migrations')
	.option(
		'-t, --tenant_codes [codes]',
		'Specify on which tenant to run the command for. It can be composed of a mix of string or regexp that are comma separated (e.g "tenant1,/specialTenant.*/")'
	)
	.action(async (options, program) => {
		console.time(green('Migration command'));
		const { tenant_codes, ...restOptions } = options;
		const optionNotValid = Object.values(restOptions).every((value) => !value);
		if (optionNotValid) {
			return program
				.showHelpAfterError(true)
				.error(
					`You must specify one of the options.${
						tenant_codes ? ' --tenant_codes only is not sufficient.' : ''
					}`
				);
		}
		if (tenant_codes && typeof tenant_codes !== 'string') {
			return program.showHelpAfterError(true).error('You must specify a value for --tenant_codes.');
		}
		await migrate(options);
		console.timeEnd(green('Migration command'));
	});

program
	.command('generate')
	.alias('g')
	.description('Generate a new component')
	.option('-m, --module', 'Generate a new module')
	.option('-md, --middleware', 'Generate a new middleware')
	.option('-s, --service', 'Generate a new service')
	.option('-r, --router', 'Generate a new router')
	.option('-e, --entity', 'Generate a new entity')
	.option('-re, --repository', 'Generate a new repository')
	.option('-mi, --migration', 'Generate a new migration')
	.option('-va, --validator', 'Generate a new validator')
	.option(
		'-p, --path <path>',
		'specify the path where the component must be generated (by default the component will be generated at [src/modules/<name>/<name>.<type>.ts]'
	)
	.argument('<name>', 'specify the name of the component(s) to create')
	.action((name: string, options: GenerateCommandOptions, program: Command) => {
		console.time(green('Generate command'));
		const { path, ...componentOptions } = options;
		if (Object.values(componentOptions).every((value) => !value)) {
			return program
				.showHelpAfterError(true)
				.error(`You must specify one of the options.${path ? ' --path only is not sufficient.' : ''}`);
		}
		generateComponent(name, options);
		console.timeEnd(green('Generate command'));
	});

program
	.command('init')
	.alias('-i')
	.description(
		'Update your existing medusa project to include the necessary configuration to use the medusa-extender package'
	)
	.action(async () => {
		console.time(green('Init command'));
		await init();
		console.timeEnd(green('Init command'));
	});

program.parse();
