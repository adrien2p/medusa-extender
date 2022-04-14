/**
 * Metadata key to store config from decorated injectables.
 */
export const MODULE_KEY = '__MODULE_KEY__';

/**
 * Metadata key to store config from decorated injectables.
 */
export const INJECTABLE_OPTIONS_KEY = '__INJECTABLE_OPTIONS_KEY__';

/**
 * Hold the name of the medusa services registered into the container for later on resolve.
 */
export const MEDUSA_RESOLVER_KEYS = {
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
	DraftOrderService: 'draftOrderService',
	OrderService: 'orderService',
	manager: 'manager',
	logger: 'logger',
	requestContext: 'requestContext',
};
