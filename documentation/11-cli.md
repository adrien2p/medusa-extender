# CLI `medex`

To make things easier for you, the project comes with a CLI that allow
you to generate any component with minimum code implementation and also
to be able to run the migrations and show the list of applied and to be applied migrations.

## Commands references

{{ cliCommandsSchematics }}

### Command `generate` reference

#### Usage

```bash
./node_modules/.bin/medex g [option]
```

#### Options

{{ cliGenerateOptionsSchematics }}

:point_right: __Examples__

Without specifying the location `-p`

```bash
./node_modules/.bin/medex g -m store
```

> Generate the store modules at `src/modules/store/store.module.ts`

With specifying the location `-p`

```bash
./node_modules/.bin/medex g -m store -p src/modules
```

> Generate the store modules at `src/modules/store.module.ts`

### Command `migrate` reference

#### Usage

```bash
./node_modules/.bin/medex m [option]
```

#### Options

{{ cliMigrateOptionsSchematics }}