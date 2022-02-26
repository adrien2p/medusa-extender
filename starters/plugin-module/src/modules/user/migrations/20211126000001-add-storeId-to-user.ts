import { Migration } from 'medusa-extender';
import { MigrationInterface, QueryRunner } from 'typeorm';

@Migration()
export default class addStoreIdToUser1611063162649 implements MigrationInterface {
	name = 'addStoreIdToUser1611063162649';

	public async up(queryRunner: QueryRunner): Promise<void> {
		const query = `ALTER TABLE public."user" ADD COLUMN IF NOT EXISTS "store_id" text;`;
		await queryRunner.query(query);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const query = `ALTER TABLE public."user" DROP COLUMN "store_id";`;
		await queryRunner.query(query);
	}
}
