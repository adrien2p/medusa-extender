export { Medusa } from './medusa';
export { customEventEmitter as eventEmitter } from './event-emmiter';
export * from './types';

export * from './decorators/onMedusaEvent.decorator';
export * from './decorators/injectable.decorator';
export * from './decorators/module.decorator';

import { Utils as _Utils } from './utils';

export const Utils = {
	attachOrReplaceEntitySubscriber: _Utils.attachOrReplaceEntitySubscriber,
	repositoryMixin: _Utils.repositoryMixin,
};
