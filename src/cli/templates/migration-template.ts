import * as dedent from 'dedent';

/**
 * Provide a basic template for the migration component generation.
 * @param migrationName
 * @param timestamp
 */
export function getMigrationTemplate(migrationName: string, timestamp: string): string {
	return dedent`
        import { MigrationInterface, QueryRunner } from 'typeorm';
        import { Migration } from 'medusa-extender';
        
        @Migration()
        export class ${migrationName + timestamp} implements MigrationInterface {
            name = '${migrationName + timestamp}';
            
            public async up(queryRunner: QueryRunner): Promise<void> {
                const query = '';
                await queryRunner.query(query);
            }
            
            public async down(queryRunner: QueryRunner): Promise<void> {
                const query = '';
                await queryRunner.query(query);
            }
        }
    `;
}
