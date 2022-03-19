import { TenantMiddleware } from './tenant.middleware';
import { Tenant } from './tenant.entity';
import TenantRepository from './tenant.repository';
import TenantMigration1647204670085 from './1647204670085-tenant.migration';
import { Module } from '../../decorators';
import { TenantService } from './tenant.service';

@Module({
	imports: [TenantMigration1647204670085, TenantMiddleware, Tenant, TenantRepository, TenantService],
})
export class TenantModule {}
