import { ConfigModule } from 'core/types';
import { getConfigFile } from 'medusa-core-utils';

export async function asyncLoadConfig(rootDir?: string, filename?: string): Promise<ConfigModule> {
	const configuration = getConfigFile(rootDir ?? process.cwd(), filename ?? `medusa-config`) as {
		configModule: ConfigModule;
		configFilePath: string;
	};
	const resolveConfigProperties = async (obj: any): Promise<ConfigModule> => {
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
