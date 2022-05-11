import { Module, Service } from "medusa-extender";
import { CartService as MedusaCartService } from '@medusajs/medusa';

@Service()
export class TestService {
    static resolutionKey = "testService";
}

@Service({ override: MedusaCartService })
export class CartService extends MedusaCartService {
    static resolutionKey = "cartService";

    customMethod = jest.fn();
}

@Module({
    imports: [TestService, CartService]
})
export class TestModule {}