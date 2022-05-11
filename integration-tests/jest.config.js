module.exports = {
	"testTimeout": 3600000,
	"moduleFileExtensions": [
		"js",
		"json",
		"ts"
	],
	"preset": 'ts-jest',
	"rootDir": "tests",
	"testRegex": ".*\\.spec\\.ts$",
	"transformIgnorePatterns": ["/node_modules/"],
	"collectCoverageFrom": [
		"**/*.(t|j)s"
	],
	"coverageReporters": [
		"json-summary",
		"text",
		"lcov"
	],
	"coverageDirectory": "../coverage",
	"testEnvironment": "node"
};
