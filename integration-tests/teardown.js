const { dropDatabase } = require("pg-god");

const isCI = !!process.env.IS_CI;

module.exports = async () => {
	await teardown();
};

async function teardown() {
	try {
		if (!isCI) {
			await dropDatabase({ databaseName: 'medusa-extender' });
		}
	} catch (e) {}
}