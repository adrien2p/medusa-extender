export function asArray(resolvers) {
	return {
		resolve: (container, opts) => resolvers.map((r) => container.build(r, opts)),
	};
}
