import { ConfigModule } from 'core/types';
import { getConfigFile } from 'medusa-core-utils';
import { MonitoringOptions } from 'modules/monitoring';

type MonitoredConfigModule = ConfigModule & { monitoring: MonitoringOptions };

export async function asyncLoadConfig(rootDir?: string, filename?: string): Promise<MonitoredConfigModule> {
	const configuration = getConfigFile(rootDir ?? process.cwd(), filename ?? `medusa-config`) as {
		configModule: ConfigModule;
		configFilePath: string;
	};
	const resolveConfigProperties = async (obj: any): Promise<MonitoredConfigModule> => {
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
