export { Medusa } from './medusa';
export { customEventEmitter as eventEmitter } from './event-emmiter';
export * from './types';

export { Injectable, Module } from './decorators';
export * from './decorators/onMedusaEvent.decorator';

import { Utils as _Utils } from './utils';

export const Utils = {
	attachOrReplaceEntitySubscriber: _Utils.attachOrReplaceEntitySubscriber,
	repositoryMixin: _Utils.repositoryMixin,
};
