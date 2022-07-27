import { User as ExtendedUser } from '@modules/user/user.entity';
import { default as ExtendedUserRepository } from '@modules/user/user.repository';

declare module '@medusajs/medusa/dist/models/user' {
	export declare class User extends ExtendedUser {}
}

declare module '@medusajs/medusa' {
	export declare class UserRepository extends ExtendedUserRepository {}
}
