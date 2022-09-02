import { Entity as MedusaEntity } from 'medusa-extender';
import { User as MedusaUser } from '@medusajs/medusa';
import { Column, Entity, Index } from 'typeorm';

@MedusaEntity({ override: MedusaUser })
@Entity()
export class User extends MedusaUser {
	@Index()
	@Column({ nullable: true })
	store_id: string;
}
