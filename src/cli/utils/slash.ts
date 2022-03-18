export function getSlashRegexpFromPlatform(): RegExp {
	if (process.platform === 'win32') {
		return new RegExp(/\/|\\|\\\\/);
	}

	return new RegExp(/\//);
}
