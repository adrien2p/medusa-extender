import { EntityEventType, MedusaEventHandlerParams, OnMedusaEntityEvent, Service } from 'medusa-extender';
import { EntityManager } from 'typeorm';
import UserSubscriber from './user.subscriber';
import { FindConfig } from '@medusajs/medusa/dist/types/common';
import { AnalyticsConfigService, EventBusService, UserService as MedusaUserService } from '@medusajs/medusa';
import { FlagRouter } from '@medusajs/medusa/dist/utils/flag-router';
import { UserRepo } from './user.repository';
import { User } from './user.entity';

type InjectedDependencies = {
	manager: EntityManager;
	userRepository: typeof UserRepo;
	eventBusService: EventBusService;
	analyticsConfigService: AnalyticsConfigService;
	featureFlagRouter: FlagRouter;
};

@Service({ override: MedusaUserService })
export default class UserService extends MedusaUserService {
	private readonly manager: EntityManager;
	private readonly userRepository: typeof UserRepo;

	constructor({
		userRepository,
		eventBusService,
		analyticsConfigService,
		featureFlagRouter,
		manager,
	}: InjectedDependencies) {
		super({ userRepository, eventBusService, analyticsConfigService, featureFlagRouter, manager });
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

	async test() {
		const userRepo = this.manager_.withRepository(this.userRepository);
		return await userRepo.test();
	}
}
