export function getExpectedComponentPath(relativePath: string, componentName: string, type: string): string {
	return process.cwd() + `/${relativePath}/${componentName}.${type}.ts`;
}
