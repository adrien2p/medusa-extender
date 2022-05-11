module.exports = {
	"testTimeout": 3600000,
	"moduleFileExtensions": [
		"js",
		"json",
		"ts"
	],
	"globalSetup": "<rootDir>/setup.js",
	"globalTeardown": "<rootDir>/teardown.js",
	"preset": 'ts-jest',
	"rootDir": ".",
	"testRegex": ".*\\.spec\\.ts$",
	"transformIgnorePatterns": ["/node_modules/"],
	"collectCoverageFrom": [
		"tests/**/*.(t|j)s"
	],
	"coverageReporters": [
		"json-summary",
		"text",
		"lcov"
	],
	"coverageDirectory": "../coverage",
	"testEnvironment": "node"
};
