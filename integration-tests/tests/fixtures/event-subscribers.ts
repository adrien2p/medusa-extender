import {
	Module,
	Service,
	Entity as MedusaEntity,
	Migration,
	Utils,
	eventEmitter,
	OnMedusaEntityEvent,
	EntityEventType,
	MedusaEventHandlerParams,
} from 'medusa-extender';
import {
	MigrationInterface,
	Entity,
	EventSubscriber,
	Index,
	EntitySubscriberInterface,
	InsertEvent,
	Connection,
	QueryRunner,
	Column,
} from 'typeorm';
import { User as MedusaUser, UserService as MedusaUserService } from '@medusajs/medusa';

@MedusaEntity({ override: MedusaUser })
@Entity()
export class User extends MedusaUser {
	@Index()
	@Column({ nullable: false })
	store_id: string;
}

@Migration()
export default class addStoreIdToUser1611063162649 implements MigrationInterface {
	name = 'addStoreIdToUser1611063162649';

	public async up(queryRunner: QueryRunner): Promise<void> {
		const query = `ALTER TABLE public."user" ADD COLUMN IF NOT EXISTS "store_id" text;`;
		await queryRunner.query(query);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const query = `ALTER TABLE public."user" DROP COLUMN "store_id";`;
		await queryRunner.query(query);
	}
}

@EventSubscriber()
class UserSubscriber implements EntitySubscriberInterface<User> {
	static attachTo(connection: Connection): void {
		Utils.attachOrReplaceEntitySubscriber(connection, this);
	}

	public listenTo(): typeof User {
		return User;
	}

	public async beforeInsert(event: InsertEvent<User>): Promise<InsertEvent<User>> {
		const eventName = OnMedusaEntityEvent.Before.InsertEvent(User);
		await eventEmitter.emitAsync<InsertEvent<User>>(eventName, {
			event,
			transactionalEntityManager: event.manager,
		});

		const eventName2 = OnMedusaEntityEvent.Before.InsertEvent(User);
		return await eventEmitter.emitAsync<InsertEvent<User>>(eventName2, {
			event,
			transactionalEntityManager: event.manager,
		});
	}
}

@Service()
export class TestService {
	static resolutionKey = 'testService';

	constructor(container) {
		UserSubscriber.attachTo(container.manager.connection);
	}

	@OnMedusaEntityEvent.Before.Insert(User, { async: true })
	public async attachStoreToUser(
		params: MedusaEventHandlerParams<User, 'Insert'>
	): Promise<EntityEventType<User, 'Insert'>> {
		params.event.entity.metadata = params.event.entity.metadata || {};
		params.event.entity.metadata.testServiceIntercept = params.event.entity.email;
		return params.event;
	}
}

@Service({ scope: 'SCOPED', override: MedusaUserService })
export class UserService extends MedusaUserService {
	constructor(container) {
		UserSubscriber.attachTo(container.manager.connection);
		super(container);
	}

	@OnMedusaEntityEvent.Before.Insert(User, { async: true })
	public async attachStoreToUser(
		params: MedusaEventHandlerParams<User, 'Insert'>
	): Promise<EntityEventType<User, 'Insert'>> {
		params.event.entity.metadata = params.event.entity.metadata || {};
		params.event.entity.metadata.userServiceIntercept = params.event.entity.email;
		return params.event;
	}
}

@Module({
	imports: [addStoreIdToUser1611063162649, User, UserService, TestService],
})
export class TestModule {}
