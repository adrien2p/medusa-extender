#! /usr/bin/env node

import { Command } from 'commander';
import { generateComponent } from './command/generate-component';
import { green } from 'chalk';
import { migrate } from './command/migrate';

const program = new Command();

program.name('medex').description('Medusa extender CLI').version('0.8.1');

program
	.command('migrate')
	.alias('m')
	.description(
		"Migrate all migrations from ['src/**/*.migration.js', 'src/**/migrations/*.js', 'dist/**/*.migration.js', 'dist/**/migrations/*.js']"
	)
	.option('-r, --run', 'Run migrations up method')
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
	.option('-m, --module <name>', 'Generate a new module')
	.option('-md, --middleware <name>', 'Generate a new middleware')
	.option('-s, --service <name>', 'Generate a new service')
	.option('-r, --router <name>', 'Generate a new router')
	.option('-e, --entity <name>', 'Generate a new entity')
	.option('-re, --repository <name>', 'Generate a new repository')
	.option('-mi, --migration <name>', 'Generate a new migration')
	.option('-va, --validator <name>', 'Generate a new validator')
	.option(
		'-p, --path <path>',
		'specify the path where the component must be generated (by default the component will be generated at [src/modules/<name>/<name>.<type>.ts]'
	)
	.action((options, program) => {
		console.time(green('Component generated successfully'));
		const { path, ...componentOptions } = options;
		if (Object.values(componentOptions).every((value) => !value)) {
			return program
				.showHelpAfterError(true)
				.error(`You must specify one of the options.${path ? ' --path only is not sufficient.' : ''}`);
		}
		generateComponent(options);
		console.timeEnd(green('Component generated successfully'));
	});

program.parse();
