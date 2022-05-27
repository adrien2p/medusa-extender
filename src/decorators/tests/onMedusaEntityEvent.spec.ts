import { Entity } from 'typeorm';
import { OnMedusaEntityEvent } from '../onMedusaEntityEvent.decorator';
import { Entity as MedusaEntity } from '../components.decorator';
import { eventEmitter, MedusaContainer, Module, Service } from '../../index';
import { createContainer } from 'awilix';
import { registerEntity, registerService } from '../../loaders';
import { metadataReader } from '../../core';
import SpyInstance = jest.SpyInstance;

const getMockContainer = (container: MedusaContainer) => {
	container.registerAdd = jest.fn(() => void 0);
	return container;
};

@MedusaEntity()
@Entity()
class EntityTest {}

@Service()
class TestHandlers {
	@OnMedusaEntityEvent.Before.Insert(EntityTest, { async: true })
	async testAsyncBeforeInsertHandler() {
		return true;
	}

	@OnMedusaEntityEvent.Before.Update(EntityTest, { async: true })
	async testAsyncBeforeUpdateHandler() {
		return true;
	}

	@OnMedusaEntityEvent.Before.Remove(EntityTest, { async: true })
	async testAsyncBeforeRemoveHandler() {
		return true;
	}

	@OnMedusaEntityEvent.After.Insert(EntityTest)
	async testAsyncAfterInsertHandler() {
		return true;
	}

	@OnMedusaEntityEvent.After.Update(EntityTest)
	async testAsyncAfterUpdateHandler() {
		return true;
	}

	@OnMedusaEntityEvent.After.Remove(EntityTest)
	async testAsyncAfterInsertRemove() {
		return true;
	}
}

@Module({ imports: [EntityTest, TestHandlers] })
class ModuleTest {}

describe('OnMedusaEntityEvent', () => {
	const container = getMockContainer(createContainer() as MedusaContainer);
	let testHandlersSpy: SpyInstance;

	beforeAll(() => {
		const metadata = metadataReader([ModuleTest]);
		registerEntity(container as MedusaContainer, metadata.get('entity')[0]);
		registerService(container as MedusaContainer, metadata.get('service')[0], {});

		const testHandlers: TestHandlers = container.resolve('testHandlers');
		testHandlersSpy = jest.spyOn(testHandlers, 'testAsyncBeforeInsertHandler');

		eventEmitter.registerListeners(container);
	});

	it('should properly build the event name', () => {
		let eventName = OnMedusaEntityEvent.Before.InsertEvent(EntityTest);
		expect(eventName).toBe(`BeforeInsert${EntityTest.name}`);
		eventName = OnMedusaEntityEvent.Before.UpdateEvent(EntityTest);
		expect(eventName).toBe(`BeforeUpdate${EntityTest.name}`);
		eventName = OnMedusaEntityEvent.Before.RemoveEvent(EntityTest);
		expect(eventName).toBe(`BeforeRemove${EntityTest.name}`);
		eventName = OnMedusaEntityEvent.After.InsertEvent(EntityTest);
		expect(eventName).toBe(`AfterInsert${EntityTest.name}`);
		eventName = OnMedusaEntityEvent.After.UpdateEvent(EntityTest);
		expect(eventName).toBe(`AfterUpdate${EntityTest.name}`);
		eventName = OnMedusaEntityEvent.After.RemoveEvent(EntityTest);
		expect(eventName).toBe(`AfterRemove${EntityTest.name}`);
	});

	it('should register new event handlers', () => {
		const beforeListenerCount =
			eventEmitter.listenerCount(`BeforeInsert${EntityTest.name}`) +
			eventEmitter.listenerCount(`BeforeUpdate${EntityTest.name}`) +
			eventEmitter.listenerCount(`BeforeRemove${EntityTest.name}`);
		expect(beforeListenerCount).toBe(3);

		const afterListenerCount =
			eventEmitter.listenerCount(`AfterInsert${EntityTest.name}`) +
			eventEmitter.listenerCount(`AfterUpdate${EntityTest.name}`) +
			eventEmitter.listenerCount(`AfterRemove${EntityTest.name}`);
		expect(afterListenerCount).toBe(3);
	});

	it('should handle call the correct decorated handler', async () => {
		await eventEmitter.emitAsync(OnMedusaEntityEvent.Before.InsertEvent(EntityTest), {
			event: { entity: new EntityTest() },
		});

		expect(testHandlersSpy).toHaveBeenCalled();
		expect(testHandlersSpy).toHaveBeenCalledWith(
			expect.objectContaining({
				values: { event: { entity: new EntityTest() } },
			})
		);
	});
});
