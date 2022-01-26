module.exports = {
	"moduleFileExtensions": [
		"js",
		"json",
		"ts"
	],
	"rootDir": "src",
	"testRegex": ".*\\.spec\\.ts$",
	transform: {
		'^.+\\.(t|j)sx?$': ['@swc/jest'],
	},
	"collectCoverageFrom": [
		"**/*.(t|j)s"
	],
	"coverageDirectory": "./coverage",
	"testEnvironment": "node"
};
