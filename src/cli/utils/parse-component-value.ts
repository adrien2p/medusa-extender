export function parseComponentValue(value: string): {
	relativeDestinationPath: string;
	fullDestinationPath: string;
	componentName: string;
	componentFileName: string;
} {
	const splitPath = value.split('/');
	const componentFileName = splitPath.pop();
	const componentName = componentFileName
		.split('.')
		.slice(0, -1)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
	const relativeDestinationPath = splitPath.join('/');
	const fullDestinationPath = process.cwd() + '/' + relativeDestinationPath;
	return { relativeDestinationPath, fullDestinationPath, componentName, componentFileName };
}
