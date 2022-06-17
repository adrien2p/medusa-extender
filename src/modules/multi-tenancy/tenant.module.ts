import { TenantMiddleware } from './tenant.middleware';
import { Module } from '../../decorators';
import { TenantService } from './tenant.service';
import { MedusaDynamicModule, ModuleInjectionOptions } from '../../core';
import { ConfigModule } from './types';

@Module()
export class TenantModule implements MedusaDynamicModule {
	async forRoot(configModule: ConfigModule): Promise<ModuleInjectionOptions> {
		if (configModule.multi_tenancy?.enable) {
			return { imports: [TenantMiddleware, TenantService] };
		}
		return { imports: [] };
	}
}
