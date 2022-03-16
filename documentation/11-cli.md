# CLI `medex`

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

#### Options

{{ cliMigrateOptionsSchematics }}