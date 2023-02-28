import { UserRepository as MedusaUserRepository } from '@medusajs/medusa/dist/repositories/user';
import { Repository as MedusaRepository } from 'medusa-extender';

export const UserRepo = MedusaUserRepository.extend({
	async test() {
		return { test: 'test' };
	},
});

@MedusaRepository({
	override: MedusaUserRepository,
	repository: UserRepo,
})
export default class UserRepository {}
