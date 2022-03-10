# Internal modules

The meudsa-extender comes with an internal module that provide a simple but complete
solution to monitor your application. With the time, it is possible that more internal modules
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

Now, run your app and go to /monitoring url to get access to your dashboard.

For more information on the configuration, you can have a look at the [documentation](https://swaggerstats.io/guide/conf.html#options)

:point_right: __Here is a demo video__

{{ template:monitoring-demo-video }}