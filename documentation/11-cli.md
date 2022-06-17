# CLI `medex`

To install the cli globally instead of using the local one, you can run the
following command

```bash
npm i -g medusa-extender
```

To make things easier for you, the project comes with a CLI that allow
you to generate any component with minimum code implementation and also
to be able to run the migrations and show the list of applied and to be applied migrations.

## Commands references

{{ cliCommandsSchematics }}

### Command `generate` reference

Each time a component is generated, the cli will try to find the closest module to 
that newly created component and add it to the `imports` list automatically.

#### Usage

```bash
./node_modules/.bin/medex g [option]
```

#### Options

{{ cliGenerateOptionsSchematics }}

#### Examples

Lets run the following command

```bash
./node_modules/.bin/medex g -m myModule
```

This command will generate a new `myModule` component. Without specifying the path (`-p`)
where to generate the component, the cli will automatically create the directory `myModule` under `src`.
The result will be the generation of the module component at `src/modules/myModule/myModule.module.ts`.

### Command `migrate` reference

#### Usage

```bash
./node_modules/.bin/medex m [option]
```

#### Config

In order to be flexible you can specify complement path to the migration files
in your `medusa-config.js` file using the `cli_migration_dirs` config.

It can be useful when you have installed some external modules that contains migrations.
In that case, you can specify the relative paths and globs to the plugin/shareable module migrations.

Let see an example

> NOTE: For the older version of the extender, the config is `cliMigrationsDirs` that is now 
> deprecated. If you set both `cliMigrationsDirs` and `cli_migration_dirs` then the last one
> will be taken into account.


```javascript
modules.exports = {
    /* ... */
    projectConfig: {
        cli_migration_dirs: [
            'node_modules/external-module/dist/**/*.migration.js',
            'dist/**/*.migration.js'
        ]
    }
    /* ... */
}
``` 

#### Options

{{ cliMigrateOptionsSchematics }}