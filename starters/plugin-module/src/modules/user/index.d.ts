import { User as MedusaUser } from '@medusajs/medusa/dist/models/user';
import { default as ExtendedUserRepository } from '@modules/user/user.repository';

declare module '@medusajs/medusa/dist/models/user' {
	export declare class User extends MedusaUser {
		store_id: string;
	}
}

declare module '@medusajs/medusa' {
	export declare class UserRepository extends ExtendedUserRepository {}
}
