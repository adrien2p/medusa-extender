module.exports = {
	"moduleFileExtensions": [
		"js",
		"json",
		"ts"
	],
	"preset": 'ts-jest',
	"rootDir": "src",
	"testRegex": ".*\\.spec\\.ts$",
	"transformIgnorePatterns": ["/node_modules/"],
	"collectCoverageFrom": [
		"**/*.(t|j)s",
		"!**/cli/index.(t|j)s",
		"!**/cli/utils/check-file-exists.(t|j)s",
		"!**/cli/utils/create-directory.(t|j)s"
	],
	"coverageReporters": [
		"json-summary",
		"text",
		"lcov"
	],
	"coverageDirectory": "../coverage",
	"testEnvironment": "node"
};
