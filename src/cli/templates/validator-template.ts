import * as dedent from 'dedent';

/**
 * Provide a basic template for the validator component generation.
 * @param validatorName
 */
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
