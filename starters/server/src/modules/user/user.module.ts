import { Module } from 'medusa-extender';
import { User } from './entities/user.entity';
import UserService from './services/user.service';
import AttachUserSubscribersMiddleware from './middlewares/attachUserSubscribers.middleware';
import addStoreIdToUser1611063162649 from './migrations/20211126000001-add-storeId-to-user';
import UserRepository from './repositories/user.repository';

@Module({
	imports: [User, UserRepository, UserService, AttachUserSubscribersMiddleware, addStoreIdToUser1611063162649],
})
export class UserModule {}
