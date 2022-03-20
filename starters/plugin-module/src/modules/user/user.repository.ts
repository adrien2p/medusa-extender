import { UserRepository as MedusaUserRepository } from '@medusajs/medusa/dist/repositories/user';
import { Repository as MedusaRepository, Utils } from 'medusa-extender';
import { EntityRepository } from 'typeorm';
import { User } from './user.entity';

@MedusaRepository({ override: MedusaUserRepository })
@EntityRepository(User)
export default class UserRepository extends Utils.repositoryMixin<User, MedusaUserRepository>(MedusaUserRepository) {}
