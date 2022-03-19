import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import { Entity as MedusaEntity } from '../../decorators';
import { ulid } from 'ulid';

@MedusaEntity({ resolutionKey: 'TenantEntity' })
@Entity()
export class Tenant {
	@PrimaryColumn()
	id: string;

	@Column({ nullable: false })
	code: string;

	@Column({ nullable: false })
	database_url: string;

	@Column({ nullable: false })
	database_type: string;

	@Column({ type: 'jsonb', default: '{}' })
	database_extra: { ssl: { rejectUnauthorized: boolean } };

	@BeforeInsert()
	private beforeInsert() {
		const id = ulid();
		this.id = `tenant_${id}`;
	}
}
