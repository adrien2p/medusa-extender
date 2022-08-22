import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { IdMap } from 'medusa-test-utils';
import { TestModule } from './fixtures/event-subscribers';
import { Context } from '../utils/types';
import { loadServer, serverTeardown } from '../utils/server';
import { makeRequest } from '../utils/request';

const adminSession = {
	jwt: {
		userId: IdMap.getId('admin_user'),
	},
};

describe('Event subscribers', () => {
	let context!: Context;

	beforeAll(async () => {
		context = await loadServer([TestModule]);
	});

	afterAll(async () => {
		await serverTeardown(context);
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('validate that the context is properly loaded', () => {
		expect(context.app).toBeTruthy();
		expect(context.appListener).toBeTruthy();
		expect(context.port).toBeTruthy();
		expect(context.container).toBeTruthy();
	});

	it('should call the subscriber when the appropriate event is fired', async () => {
		const email = 'test@test.com';
		const res = await makeRequest(context, {
			path: `/admin/users`,
			method: 'post',
			adminSession,
			body: {
				email,
				password: 'fakePassword',
			},
		}).expect(200);

		expect(res.body.user.metadata).toEqual(
			expect.objectContaining({
				userServiceIntercept: email,
				testServiceIntercept: email,
			})
		);
	});

	it('should call the subscriber when the appropriate event is fired during concurrent requests', async () => {
		const email = 'test2@test.com';
		const email2 = 'test3@test.com';

		const [res1, res2] = await Promise.all([
			makeRequest(context, {
				path: `/admin/users`,
				method: 'post',
				adminSession,
				body: {
					email,
					password: 'fakePassword',
				},
			}),
			makeRequest(context, {
				path: `/admin/users`,
				method: 'post',
				adminSession,
				body: {
					email: email2,
					password: 'fakePassword',
				},
			}),
		]);

		expect(res1.body.user.metadata).toEqual(
			expect.objectContaining({
				userServiceIntercept: email,
				testServiceIntercept: email,
			})
		);

		expect(res2.body.user.metadata).toEqual(
			expect.objectContaining({
				userServiceIntercept: email2,
				testServiceIntercept: email2,
			})
		);
	});
});
