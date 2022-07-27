module.exports = {
	"moduleFileExtensions": [
		"js",
		"json",
		"ts"
	],
	"testTimeout": 100000,
	"preset": 'ts-jest',
	"rootDir": "src",
	"testRegex": ".*\\.spec\\.ts$",
	"transformIgnorePatterns": ["/node_modules/"],
	"collectCoverageFrom": [
		"**/*.(t|j)s",
		"!**/__*__/*.(t|j)s",
		"!**/cli/index.(t|j)s"
	],
	"coverageReporters": [
		"json-summary",
		"text",
		"lcov"
	],
	"coverageDirectory": "../coverage",
	"testEnvironment": "node",
  	"setupFilesAfterEnv": ["<rootDir>/setupTests.js"]
};
