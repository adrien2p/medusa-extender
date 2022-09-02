import { default as ExtendedUserRepository } from './user.repository';

declare module '@medusajs/medusa/dist/models/user' {
	declare interface User {
		store_id: string;
	}
}

declare module '@medusajs/medusa/dist/repositories/user' {
	declare class UserRepository extends ExtendedUserRepository {}
}
