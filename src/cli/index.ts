#! /usr/bin/env node

import { Command } from 'commander';
import { generateComponent } from './command/generate-component';

const program = new Command();

program.name('medex').description('Medusa extender CLI').version('0.8.1');

program
	.command('generate')
	.description('Generate a new component')
	.option(
		'-m, --module <string>',
		'Generate a new module with the specified name. The name must include the path where the module must be generated.'
	)
	.option(
		'-md, --middleware <string>',
		'Generate a new middleware with the specified name. The name must include the path where the module must be generated.'
	)
	.option(
		'-s, --service <string>',
		'Generate a new service with the specified name. The name must include the path where the module must be generated.'
	)
	.option(
		'-r, --router <string>',
		'Generate a new router with the specified name. The name must include the path where the module must be generated.'
	)
	.action((options, program) => {
		if (Object.values(options).every((value) => !value)) {
			return program.showHelpAfterError(true).error('You must specify one of the options.');
		}
		generateComponent(options);
	});

program.parse();
