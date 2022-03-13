import { MigrationInterface, QueryRunner } from 'typeorm';
import { Migration } from '../../decorators';

@Migration()
export default class TenantMigration1647204670085 implements MigrationInterface {
	name = 'TenantMigration1647204670085';

	public async up(queryRunner: QueryRunner): Promise<void> {
		const query = `
            CREATE TABLE tenant
            (
                id             text PRIMARY KEY,
                host           text  NOT NULL,
                database_url   text  NOT NULL,
                database_type  text  NOT NULL,
                database_extra jsonb not null default '{}'::jsonb
                
            );
        `;
		await queryRunner.query(query);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const query = `DROP TABLE tenant;`;
		await queryRunner.query(query);
	}
}
