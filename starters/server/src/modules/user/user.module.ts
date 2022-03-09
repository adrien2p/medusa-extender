import { Module } from 'medusa-extender';
import { User } from './user.entity';
import UserService from './user.service';
import AttachUserSubscribersMiddleware from './attachUserSubscribers.middleware';
import addStoreIdToUser1611063162649 from './20211126000001-add-storeId-to-user';
import UserRepository from './user.repository';

@Module({
	imports: [User, UserRepository, UserService, AttachUserSubscribersMiddleware, addStoreIdToUser1611063162649],
})
export class UserModule {}
