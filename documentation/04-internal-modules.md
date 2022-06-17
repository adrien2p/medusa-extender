# Internal modules (Optional)

The meudsa-extender comes with some internal modules that provide a simple but complete
solution. With the time, it is possible that more internal modules
will be provided.

> If you choose to not use an internal module, none of its dependencies will be installed.
> The only time the dependencies are downloaded is at run time if you choose to use an
> internal module.

## Monitoring

If you want to monitor whats going on on your app, you must specify the config
in your `medusa-config` file.

Here are the expected config

```typescript
interface MonitoringOptions {
    version?: string;
    hostname?: string;
    ip?: string;
    timelineBucketDuration?: number;
    swaggerSpec?: string | OpenAPI.Document;
    uriPath: string;
    durationBuckets?: number[];
    requestSizeBuckets?: number[];
    responseSizeBuckets?: number[];
    apdexThreshold?: number;
    onResponseFinish?: (req: Request, res: Response, next: NextFunction) => void | Promise<void>;
    authentication?: boolean;
    sessionMaxAge?: number;
    elasticsearch?: string;
    onAuthenticate?: (req: Request, username: string, password: string) => boolean | Promise<boolean>;
}
```

so your `medusa-config.js` will looks like

```typescript
const config = {
    /* ... */
    monitoring: {
        uriPath: '/monitoring'
    },
    /* ... */
};
```

Now, run your app and go to `/monitoring` url to get access to your dashboard.

For more information about the configuration, you can have a look at the [documentation](https://swaggerstats.io/guide/conf.html#options)

:point_right: __Here is a demo video__

{{ template:monitoring-demo-video }}

## Multi-tenancy

> With the extender, it is possible by default to build multi vendor, multi tenant
> applications. This module, only provide a specific approach for specific cases and does not
> mean that it is not something you can do without that module.

As part of the extender, you can choose to use a multi-tenancy architecture or a single-tenancy architecture depending
on your needs.

Here is a schema of different architecture, with this module we are in the `Multi-tenant 1` schema.

{{ template:multi-tenancy-schema }}

> However, you must read some articles about pros and cons of this type of architecture
> and be fully aware of those before making your choice.

Here is the expected config

```json
interface MultiTenancyOptions {
    enable: boolean;
	tenant_code_resolver: (req: MedusaRequest) => string;
	tenants: {
		code: string;
		database_config: {
			database_type: string;
			database_url: string;
			database_database: string;
			database_extra: Record<string, unknown>;
		};
	}[];
}
```

> This module is a dynamic module, which means, that it will only be imported and resolved
> if the it has been enabled in the config as shown above.

so your `medusa-config.js` will looks like

```typescript
const config = {
    /* ... */
    multiTenancy: {
        enable: true,
        tenant_code_resolver: (req: MedusaRequest) => "" /* Here you can grab the property on which the tenant code is stored */,
        tenants: [{
            code: "your-tenant-code",
            database_config: {
                database_type: 'tenant-database-type',
                database_url: 'tenant-database-url',
                database_database: 'tenant-database-name',
                database_extra: {}
            },
        }],
    },
    /* ... */
};
```

Ant that's it, you can now run your server and play around your multi-tenancy
architecture.
Each tenant will only access the data from the database that has been specified for that
tenant.