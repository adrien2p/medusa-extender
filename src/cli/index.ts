#! /usr/bin/env node

import { Command } from 'commander';
import { generateComponent } from './command/generate-component';
import { green } from 'chalk';
import { migrate } from './command/migrate';

const program = new Command();

program.name('medex').description('Medusa extender CLI').version('0.8.1');

program
	.command('migrate')
	.option('-r, --run', 'Run migrations up method.')
	.option('-s, --show', 'Show all applied migrations.')
	.description(
		"Migrate all migrations from ['src/**/*.migration.js', 'src/**/migrations/*.js', 'dist/**/*.migration.js', 'dist/**/migrations/*.js']"
	)
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
	.description('Generate a new component')
	.option(
		'-m, --module <string>',
		'Generate a new module with the specified name. The name must include the relative path where the component must be generated.'
	)
	.option(
		'-md, --middleware <string>',
		'Generate a new middleware with the specified name. The name must include the relative path where the component must be generated.'
	)
	.option(
		'-s, --service <string>',
		'Generate a new service with the specified name. The name must include the relative path where the component must be generated.'
	)
	.option(
		'-r, --router <string>',
		'Generate a new router with the specified name. The name must include the relative path where the component must be generated.'
	)
	.option(
		'-e, --entity <string>',
		'Generate a new entity with the specified name. The name must include the relative path where the component must be generated.'
	)
	.option(
		'-re, --repository <string>',
		'Generate a new repository with the specified name. The name must include the relative path where the component must be generated.'
	)
	.option(
		'-mi, --migration <string>',
		'Generate a new migration with the specified name. The name must include the relative path where the component must be generated.'
	)
	.option(
		'-va, --validator <string>',
		'Generate a new validator with the specified name. The name must include the relative path where the component must be generated.'
	)
	.action((options, program) => {
		console.time(green('Component generated successfully'));
		if (Object.values(options).every((value) => !value)) {
			return program.showHelpAfterError(true).error('You must specify one of the options.');
		}
		generateComponent(options);
		console.timeEnd(green('Component generated successfully'));
	});

program.parse();
