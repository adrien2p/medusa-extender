module.exports = {
	projectConfig: {
		jwtSecret: "supersecret",
		cookieSecret: "supersecret",

		database_url: `postgres://localhost:5432/medusa-extender`,
		database_type: 'postgres'
	},
	plugins: [],
};
