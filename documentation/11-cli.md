# CLI `medex`

To make things easier for you, the project comes with a CLI that allow
you to generate any component with minimum code implementation and also
to be able to run the migrations and show the list of applied and to be applied migrations.

Let see that CLI usage together

## Usage

```bash
./node_modules/.bin/medex --help
```

Help output:

```bash
Usage: medex [options] [command]

Medusa extender CLI

Options:
  -V, --version       output the version number
  -h, --help          display help for command

Commands:
  migrate [options]   Migrate all migrations from ['src/**/*.migration.js', 'src/**/migrations/*.js', 'dist/**/*.migration.js', 'dist/**/migrations/*.js']
  generate [options]  Generate a new component
  help [command]      display help for command
```

## Commands

> The `migrate | m` command allow you to run or show migrations.

```bash
Usage: medex migrate [options]

Migrate all migrations from ['src/**/*.migration.js', 'src/**/migrations/*.js', 'dist/**/*.migration.js', 'dist/**/migrations/*.js']

Options:
  -r, --run   Run migrations up method
  -s, --show  Show all applied migrations
  -h, --help  display help for command
```

> The `generate | g` command allow you to genrate any component with minimal code implementation.

```bash
Usage: medex generate [options]

Generate a new component

Options:
  -m, --module <string>       Generate a new module
  -md, --middleware <string>  Generate a new middleware
  -s, --service <string>      Generate a new service
  -r, --router <string>       Generate a new router
  -e, --entity <string>       Generate a new entity
  -re, --repository <string>  Generate a new repository
  -mi, --migration <string>   Generate a new migration
  -va, --validator <string>   Generate a new validator
  -h, --help                  display help for command
```