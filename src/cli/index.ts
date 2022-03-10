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
	.description('Generate a new component from the given component path (eg. src/modules/myModule/myModule.module.ts)')
	.option('-m, --module <string>', 'Generate a new module')
	.option('-md, --middleware <string>', 'Generate a new middleware')
	.option('-s, --service <string>', 'Generate a new service')
	.option('-r, --router <string>', 'Generate a new router')
	.option('-e, --entity <string>', 'Generate a new entity')
	.option('-re, --repository <string>', 'Generate a new repository')
	.option('-mi, --migration <string>', 'Generate a new migration')
	.option('-va, --validator <string>', 'Generate a new validator')
	.action((options, program) => {
		console.time(green('Component generated successfully'));
		if (Object.values(options).every((value) => !value)) {
			return program.showHelpAfterError(true).error('You must specify one of the options.');
		}
		generateComponent(options);
		console.timeEnd(green('Component generated successfully'));
	});

program.parse();
