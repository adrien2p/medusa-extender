import 'reflect-metadata';
import { Entity, Middleware, Migration, Repository, Router, Service } from '../components.decorator';
import { INJECTABLE_OPTIONS_KEY } from '../';

describe('components', () => {
	describe('Entity', () => {
		it('should define the entity metadata', () => {
			@Entity({ resolutionKey: 'resolutionLKey' })
			class Test {}

			const metadata = Reflect.getMetadata(INJECTABLE_OPTIONS_KEY, Test);
			expect(metadata).toEqual({ type: 'entity', resolutionKey: 'resolutionLKey' });
		});
	});

	describe('Service', () => {
		it('should define the service metadata', () => {
			@Service({ resolutionKey: 'resolutionLKey' })
			class Test {}

			const metadata = Reflect.getMetadata(INJECTABLE_OPTIONS_KEY, Test);
			expect(metadata).toEqual({ type: 'service', resolutionKey: 'resolutionLKey' });
		});
	});

	describe('Repository', () => {
		it('should define the repository metadata', () => {
			@Repository({ resolutionKey: 'resolutionLKey' })
			class Test {}

			const metadata = Reflect.getMetadata(INJECTABLE_OPTIONS_KEY, Test);
			expect(metadata).toEqual({ type: 'repository', resolutionKey: 'resolutionLKey' });
		});
	});

	describe('Middleware', () => {
		it('should define the middleware metadata', () => {
			@Middleware({ requireAuth: true, routerOptions: [{ path: '', method: 'get' }] })
			class Test {}

			const metadata = Reflect.getMetadata(INJECTABLE_OPTIONS_KEY, Test);
			expect(metadata).toEqual({
				type: 'middleware',
				requireAuth: true,
				routerOptions: [{ path: '', method: 'get' }],
			});
		});
	});

	describe('Migration', () => {
		it('should define the migration metadata', () => {
			@Migration()
			class Test {}

			const metadata = Reflect.getMetadata(INJECTABLE_OPTIONS_KEY, Test);
			expect(metadata).toEqual({ type: 'migration' });
		});
	});

	describe('Router', () => {
		it('should define the router metadata', () => {
			@Router({
				router: [
					{
						handler: () => '',
						method: 'get',
						path: '',
						requiredAuth: true,
					},
				],
			})
			class Test {}

			const metadata = Reflect.getMetadata(INJECTABLE_OPTIONS_KEY, Test);
			console.log(metadata);
			expect(metadata.type).toBe('router');
			expect({ ...metadata.router[0] }).toMatchObject({
				method: 'get',
				path: '',
				requiredAuth: true,
			});
			expect(metadata.router[0].handler).toBeDefined();
			expect(metadata.router[0].handler('')).toEqual('');
		});
	});
});
