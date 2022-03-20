import { Service } from 'medusa-extender';
import { EntityManager } from 'typeorm';
import { UserService as MedusaUserService } from '@medusajs/medusa/dist/services';
import EventBusService from '@medusajs/medusa/dist/services/event-bus';
import UserRepository from './user.repository';
import { User } from './user.entity';

type ConstructorParams = {
	loggedInUser: User;
	manager: EntityManager;
	userRepository: typeof UserRepository;
	eventBusService: EventBusService;
};

@Service({ override: MedusaUserService, scope: 'SCOPED' })
export default class UserService extends MedusaUserService {
	private readonly manager: EntityManager;
	private readonly userRepository: typeof UserRepository;
	private readonly eventBus: EventBusService;

	constructor(private readonly container: ConstructorParams) {
		super(container);
		this.manager = container.manager;
		this.userRepository = container.userRepository;
		this.eventBus = container.eventBusService;
	}
}
