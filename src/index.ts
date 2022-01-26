export { Medusa } from './medusa';
export { customEventEmitter as eventEmitter } from './event-emmiter';
export * from './types';

export { OnMedusaEvent, Injectable, Module } from './decorators';

import { Utils as _Utils } from './utils';

export const Utils = {
	attachOrReplaceEntitySubscriber: _Utils.attachOrReplaceEntitySubscriber,
	repositoryMixin: _Utils.repositoryMixin,
};
