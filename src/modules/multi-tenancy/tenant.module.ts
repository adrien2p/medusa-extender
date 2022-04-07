import { TenantMiddleware } from './tenant.middleware';
import { Module } from '../../decorators';
import { TenantService } from './tenant.service';

@Module({
	imports: [ TenantMiddleware, TenantService],
})
export class TenantModule {}
