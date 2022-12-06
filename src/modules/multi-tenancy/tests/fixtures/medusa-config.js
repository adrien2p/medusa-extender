const tenantCodes = ['tenant-code-1', 'tenant-code-2'];
module.exports = {
	projectConfig: {
		database_logging: 'all',
	},
	multi_tenancy: {
		enable: true,
		tenant_code_resolver: (req) => req.headers['x-tenant'],
		tenants: tenantCodes.map((tenantCode) => ({
			code: tenantCode,
			database_config: {
				database_type: 'postgres',
				database_url: 'url:' + tenantCode,
				database_database: null,
				database_extra: {},
			},
		})),
	},
};