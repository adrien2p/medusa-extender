import { IsString } from 'class-validator';
import { Module, Validator } from '../../decorators';
import { metadataReader } from '../../core';
import { validatorsLoader } from '../validators.loader';
import { AdminPostProductsReq } from '@medusajs/medusa/dist';

describe('ValidatorsLoader', () => {
	@Validator({ override: AdminPostProductsReq })
	class ExtendedClassValidator extends AdminPostProductsReq {
		@IsString()
		customField: string;
	}

	@Module({ imports: [ExtendedClassValidator] })
	class ValidatorModule {}

	it('should override the existing validator when calling the validator utility', async () => {
		const validatorModule = await import('@medusajs/medusa/dist/utils/validator');
		const validatorSpy = jest.spyOn(validatorModule, 'validator');

		const components = metadataReader([ValidatorModule]);
		await validatorsLoader(components.get('validator'));
		await validatorModule.validator(AdminPostProductsReq, { customField: 'customField', title: 'title' }, {});

		expect(validatorSpy).toHaveBeenCalled();
		expect(validatorSpy).toHaveBeenCalledWith(
			ExtendedClassValidator,
			expect.objectContaining({
				customField: 'customField',
				title: 'title',
			}),
			expect.objectContaining({})
		);
	});
});
