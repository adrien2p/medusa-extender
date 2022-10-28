import { ConfigModule } from 'core/types';
import { getConfigFile } from 'medusa-core-utils';

export async function asyncLoadConfig(): Promise<ConfigModule> {
	const configuration = getConfigFile(process.cwd(), `medusa-config`) as {
		configModule: ConfigModule;
		configFilePath: string;
	};
	const resolveConfigProperties = async (obj): Promise<ConfigModule> => {
		for (const key of Object.keys(obj)) {
			if (typeof obj[key] === 'object' && obj[key] !== null) {
				await resolveConfigProperties(obj[key]);
			}
			if (typeof obj[key] === 'function') {
				obj[key] = await obj[key]();
			}
		}
		return obj;
	};
	const configModule = await resolveConfigProperties(configuration.configModule);
	return configModule;
}
