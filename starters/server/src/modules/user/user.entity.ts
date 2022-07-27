import { User as MedusaUser } from '@medusajs/medusa';
import { Column, Entity, Index } from 'typeorm';
import { Entity as MedusaEntity } from 'medusa-extender';

@MedusaEntity({ override: MedusaUser })
@Entity()
export class User extends MedusaUser {
	@Index()
	@Column({ nullable: false })
	store_id: string;
}
