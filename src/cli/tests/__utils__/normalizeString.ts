import * as dedent from 'dedent';

export function normalizeString(str: string): string {
	return dedent(str).replace(/r?\n|\r|\t|\s/g, '');
}
