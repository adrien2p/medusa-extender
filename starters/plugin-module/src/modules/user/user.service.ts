import { Service } from 'medusa-extender';
import { EntityManager } from 'typeorm';
import { EventBusService, UserService as MedusaUserService } from '@medusajs/medusa/dist/services';
import { FindConfig } from '@medusajs/medusa/dist/types/common';
import { User } from '@medusajs/medusa';
import UserRepository from '@modules/user/user.repository';

type InjectedDependencies = {
	manager: EntityManager;
	userRepository: typeof UserRepository;
	eventBusService: EventBusService;
};

@Service({ override: MedusaUserService })
export default class UserService extends MedusaUserService {
	private readonly manager: EntityManager;
	private readonly userRepository: typeof UserRepository;

	constructor({ manager, userRepository, eventBusService }: InjectedDependencies) {
		super({ manager, userRepository, eventBusService });
		this.manager = manager;
		this.userRepository = userRepository;
	}

	async retrieve(userId: string, config?: FindConfig<User>): Promise<User> {
		return await super.retrieve(userId, config);
	}
}
