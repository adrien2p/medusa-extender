import { EntityEventType, MedusaEventHandlerParams, OnMedusaEntityEvent, Service } from 'medusa-extender';
import { EntityManager } from 'typeorm';
import { EventBusService, UserService as MedusaUserService } from '@medusajs/medusa/dist/services';
import UserRepository from './user.repository';
import UserSubscriber from './user.subscriber';
import { FindConfig } from '@medusajs/medusa/dist/types/common';
import { User } from '@medusajs/medusa';

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
		UserSubscriber.attachTo(manager.connection);
	}

	@OnMedusaEntityEvent.Before.Insert(User, { async: true })
	public async attachStoreToUser(
		params: MedusaEventHandlerParams<User, 'Insert'>
	): Promise<EntityEventType<User, 'Insert'>> {
		console.log(params.event.entity.store_id);
		params.event.entity.metadata = params.event.entity.metadata || {};
		params.event.entity.metadata.someData = 'test';
		return params.event;
	}

	async retrieve(userId: string, config?: FindConfig<User>): Promise<User> {
		const user = await super.retrieve(userId, config);
		console.log(user.store_id);
		return user;
	}
}
