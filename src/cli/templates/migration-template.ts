import * as dedent from 'dedent';

export function getMigrationTemplate(migrationName: string): string {
	return dedent`
        import { MigrationInterface, QueryRunner } from 'typeorm';
        import { Migration } from 'medusa-extender';
        
        @Migration()
        export default class ${migrationName} implements MigrationInterface {
            name = '${migrationName}';
            
            public async up(queryRunner: QueryRunner): Promise<void> {
                const query = ``;
                await queryRunner.query(query);
            }
            
            public async down(queryRunner: QueryRunner): Promise<void> {
                const query = ``;
                await queryRunner.query(query);
            }
        }
    `;
}
