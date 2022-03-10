import * as dedent from 'dedent';

export function getMigrationTemplate(migrationName: string): string {
	const timestamp = Date.now();
	return dedent`
        import { MigrationInterface, QueryRunner } from 'typeorm';
        import { Migration } from 'medusa-extender';
        
        @Migration()
        export default class ${migrationName + timestamp} implements MigrationInterface {
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
