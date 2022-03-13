import { TenantMiddleware } from './tenant.middleware';
import { Tenant } from './tenant.entity';
import TenantRepository from './tenant.repository';
import TenantMigration1647204670085 from './tenant.migration';
import { Module } from '../../decorators';

@Module({
	imports: [TenantMigration1647204670085, TenantMiddleware, Tenant, TenantRepository],
})
export class TenantModule {}
