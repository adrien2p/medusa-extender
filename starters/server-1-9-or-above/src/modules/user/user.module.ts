import { Module } from 'medusa-extender';
import UserService from './user.service';
import addStoreIdToUser1611063162649 from './20211126000001-add-storeId-to-user';
import UserRepository from './user.repository';
import { User } from './user.entity';
import { UseRouter } from './user.route';

@Module({
	imports: [User, UserRepository, UseRouter, UserService, addStoreIdToUser1611063162649],
})
export class UserModule {}
