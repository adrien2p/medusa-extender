import { readdir } from 'fs/promises';
import { extname, join } from 'path';

type ScannerResults<T extends object> = {
	[P in keyof T]: T[P][];
};

/**
 * Scan directories from top to bottom to find any file that match the constraints and return the default exported
 * member from this file.
 * @param directory Directory from which to start
 * @param results The collection of default exported member
 * @param constraints The constraints to match a file
 */
export async function scanFor<T extends object>(
	directory: string,
	constraints: {
		extname?: string;
		searchFor: {
			lastSegmentPathDir?: string;
			retrievalKey: string;
		}[];
	},
	results: ScannerResults<T> = {} as ScannerResults<T>
): Promise<ScannerResults<T>> {
	if (!results || !Object.keys(results).length) {
		constraints.searchFor.forEach((searchFor) => {
			results[searchFor.retrievalKey] = [];
		});
	}

	const filesOrDirectories = await readdir(directory, {
		withFileTypes: true,
	});

	for (const fileOrDirectory of filesOrDirectories) {
		const pathSegments = directory.split('/');
		const lastSegmentPathDir = pathSegments[pathSegments.length - 1];

		if (fileOrDirectory.isDirectory()) {
			await this.scanFor(join(directory, fileOrDirectory.name), constraints, results);
		}

		const matchedConstraint = constraints.searchFor.find((searchFor) => {
			return lastSegmentPathDir === searchFor.lastSegmentPathDir;
		});

		if (extname(fileOrDirectory.name) === constraints.extname && !!matchedConstraint) {
			const importFilePath = join(directory, fileOrDirectory.name);
			const { default: result } = await import(importFilePath);
			if (!result) {
				throw new Error(
					`Trying to import ${fileOrDirectory.name} without a efault exported member. Have a look at ${importFilePath} and check that there is a default export member.`
				);
			}
			results[matchedConstraint.retrievalKey].push(result);
		}
	}

	return results;
}
