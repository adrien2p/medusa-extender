import { Module, Router, Service } from "medusa-extender";
import { CartService as MedusaCartService } from '@medusajs/medusa';
import { Response, Request } from "express";

@Service()
export class TestService {
    static resolutionKey = "testService";
}

@Service({ override: MedusaCartService })
export class CartService extends MedusaCartService {
    static resolutionKey = "cartService";

    customMethod = jest.fn();
}

@Router({
    routes: [{
        path: '/admin/test-path',
        method: "get",
        requiredAuth: false,
        handlers: [(req: Request, res: Response) => {
            return res.send('healthy')
        }]
    },
    {
        path: '/admin/authenticated-test-path',
        method: "get",
        requiredAuth: true,
        handlers: [(req: Request, res: Response) => {
            return res.send('healthy authenticated')
        }]
    }]
})
export class AdminRouter {}

@Module({
    imports: [TestService, CartService, AdminRouter]
})
export class TestModule {}