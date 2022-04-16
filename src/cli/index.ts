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
	.description(
		"Migrate all migrations from ['src/**/*.migration.js', 'src/**/migrations/*.js', 'dist/**/*.migration.js', 'dist/**/migrations/*.js']"
	)
	.option('-r, --run', 'Run migrations up method')
	.option('-u, --revert', 'Revert the last migrations')
	.option('-s, --show', 'Show all applied and non applied migrations')
	.action(async (options, program) => {
		console.time(green('Migration command'));
		if (Object.values(options).every((value) => !value)) {
			return program.showHelpAfterError(true).error('You must specify one of the options.');
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
		const { path, ...componentOptions } = options;
		if (Object.values(componentOptions).every((value) => !value)) {
			return program
				.showHelpAfterError(true)
				.error(`You must specify one of the options.${path ? ' --path only is not sufficient.' : ''}`);
		}
		generateComponent(name, options);
	});

program
	.command('init')
	.alias('-i')
	.description(
		'Update your existing medusa project to include the necessary configuration to use the medusa-extender package'
	)
	.action(async () => {
		await init();
	});

program.parse();
