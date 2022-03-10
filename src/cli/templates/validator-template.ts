import * as dedent from 'dedent';

export function getValidatorTemplate(validatorName: string): string {
	return dedent`
        import { Validator } from 'medusa-extender';
        import { AdminPostProductsReq } from '@medusajs/medusa/dist/api/routes/admin/products/create-product'
        import { IsString } from 'class-validator';
        
        @Validator({ override: /* Which validator must be overridden */ })
        class ${validatorName} { /* extends AdminPostProductsReq { */
          @IsString()
          customField: string;
        }
    `;
}
