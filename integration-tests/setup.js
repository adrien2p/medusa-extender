const { createDatabase, dropDatabase } = require("pg-god");
const { execSync } = require("child_process");

const isCI = !!process.env.IS_CI;

module.exports = async () => {
	await setupDb();
};

async function setupDb() {
	if (!isCI) {
		await dropDatabase({ databaseName: 'medusa-extender' }).catch(() => void 0);
		await createDatabase({ databaseName: 'medusa-extender' });
	}

	execSync('node_modules/.bin/medusa migrations run', { cwd: __dirname });
}