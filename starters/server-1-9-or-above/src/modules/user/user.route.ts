import { Router } from 'medusa-extender';
import UserService from './user.service';

@Router({
	routes: [
		{
			requiredAuth: false,
			method: 'get',
			path: '/test',
			handlers: [
				async (req: any, res: any) => {
					const userService: UserService = req.scope.resolve('userService');
					const result = await userService.test();
					res.json(result);
				},
			],
		},
	],
})
export class UseRouter {}
