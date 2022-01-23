import { NextFunction, Request, Response } from 'express';
import { AwilixContainer, LifetimeType } from 'awilix';

export interface Type<T = unknown> extends Function {
	new (...args: unknown[]): T;
}

export type Constructor<T> = new (...args: unknown[]) => T;

// eslint-disable-next-line @typescript-eslint/ban-types
export type Metatype<T = unknown> = Type<T> | string | symbol | Function;

export type StaticImplements<I extends new (...args: any[]) => any> = InstanceType<I>;

/**
 * Hold the name of the medusa services registered into the container for later on resolve.
 */
export const MedusaResolverKeys = {
	EventBusService: 'eventbusService',
	UserService: 'userService',
	CustomerService: 'customerService',
	AuthService: 'authService',
	MiddlewareService: 'middlewareService',
	NotificationService: 'notificationService',
	TotalsService: 'totalsService',
	StoreService: 'storeService',
	PaymentProviderService: 'paymentproviderService',
	FulfillmentProviderService: 'fulfillmentproviderService',
	RegionService: 'regionService',
	ProductVariantService: 'productvariantService',
	ProductCollectionService: 'productcollectionService',
	DefaultSearchService: 'defaultsearchService',
	ProductService: 'productService',
	DiscountService: 'discountService',
	GiftCardService: 'giftcardService',
	ShippingOptionService: 'shippingoptionService',
	CustomShippingOptionService: 'customshippingoptionService',
	ShippingProfileService: 'shippingprofileService',
	LineItemService: 'lineitemService',
	FulfillmentService: 'fulfillmentService',
	InventoryService: 'inventoryService',
	CartService: 'cartService',
	DraftOrderService: 'draftorderService',
	OrderService: 'orderService',
	manager: 'manager',
	logger: 'logger',
	requestContext: 'requestContext',
};

/**
 * Medusa request extended.
 */
export type MedusaRequest<T = any, Cradle extends object = any> = Request & {
	scope: AwilixContainer<Cradle & T>;
};

/**
 * Describe the expected request from a middleware {@link MedusaMiddleware}.
 */
export type MedusaAuthenticatedRequest = Request &
	MedusaRequest & {
		user?: { id?: string; userId: string };
		userId: string;
		session: { jwt: string };
	};

export type MedusaRouteMethods = 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head';
/**
 * Describe all the available options for the Route {@link MedusaMiddleware}.
 */
export type MedusaRouteOptions = {
	path: string;
	method: MedusaRouteMethods;
};

/**
 * @interface
 * Describe a custom middleware instance.
 */
export interface MedusaMiddlewareInstance {
	consume(
		options?: Record<string, unknown>
	): (req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction) => void | Promise<void>;
}

/**
 * @interface
 * Describe a custom middleware constructor.
 */
export interface MedusaMiddlewareStatic {
	isPostAuth?: boolean;
	isHandledByMedusa?: boolean;
	routesOptions: MedusaRouteOptions | MedusaRouteOptions[];

	new (): MedusaMiddlewareInstance;
}

/**
 * Any custom medusa middleware must implement MedusaMiddleware.
 */
export type MedusaMiddleware<T extends MedusaMiddlewareStatic = MedusaMiddlewareStatic> = StaticImplements<T>;

/**
 * @interface
 * Describe a custom service instance.
 */
export interface MedusaServiceInstance {}

/**
 * @interface
 * Describe a custom service constructor.
 */
export interface MedusaServiceStatic<OverriddenType = unknown> {
	overriddenType?: Type<OverriddenType>;
	isHandledByMedusa?: boolean;
	scope?: LifetimeType;

	/**
	 * Only required if there is no overriddenType
	 */
	resolutionKey?: string;

	new (container: any): MedusaServiceInstance;
}

/**
 * Any custom medusa service must implement MedusaService.
 */
export type MedusaService<
	OverriddenType = unknown,
	T extends MedusaServiceStatic<OverriddenType> = MedusaServiceStatic<OverriddenType>
> = StaticImplements<T>;

/**
 * @interface
 * Describe a custom entity instance.
 */
export interface MedusaEntityInstance {}

/**
 * @interface
 * Describe a custom entity constructor.
 */
export interface MedusaEntityStatic<OverriddenType = unknown> {
	overriddenType?: Type<OverriddenType>;
	isHandledByMedusa?: boolean;

	new (): MedusaEntityInstance;
}

/**
 * Any custom medusa entity must implement MedusaService.
 */
export type MedusaEntity<
	OverriddenType = unknown,
	T extends MedusaEntityStatic<OverriddenType> = MedusaEntityStatic<OverriddenType>
> = StaticImplements<T>;

/**
 * @interface
 * Describe a custom entity repository instance.
 */
export interface MedusaRepositoryInstance {}

/**
 * @interface
 * Describe a custom entity repository constructor.
 */
export interface MedusaRepositoryStatic<OverriddenType = unknown> {
	overriddenType: Type<OverriddenType>;
	isHandledByMedusa?: boolean;

	new (): MedusaRepositoryInstance;
}

/**
 * Any custom medusa entity repository must implement MedusaService.
 */
export type MedusaRepository<
	OverriddenType = unknown,
	T extends MedusaRepositoryStatic<OverriddenType> = MedusaRepositoryStatic<OverriddenType>
> = StaticImplements<T>;

/**
 * @interface
 * Describe a custom entity rsubscriberepository instance.
 */
export interface MedusaEntitySubscriberInstance {}

/**
 * @interface
 * Describe a custom subscriber constructor.
 */
export interface MedusaEntitySubscriberStatic {
	new (request: MedusaRequest | MedusaAuthenticatedRequest): MedusaEntitySubscriberInstance;
}

/**
 * Any custom medusa subscriber must implement MedusaEntitySubscriber.
 */
export type MedusaEntitySubscriber<T extends MedusaEntitySubscriberStatic = MedusaEntitySubscriberStatic> =
	StaticImplements<T>;

/**
 * Event types that can be emitted from an entity subscriber.
 */
export const MedusaEntityEvents = {
	BeforeInsert: 'beforeInsert',
	AfterInsert: 'afterInsert',
};

/**
 * Describe a custom router handler.
 */
export type MedusaRoute = {
	method: MedusaRouteMethods;
	path: string;
	isAuthenticated?: boolean;
	handler: (req: MedusaAuthenticatedRequest | Request, res: Response) => unknown | Promise<unknown>;
};
