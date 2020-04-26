const path = require('path')

module.exports = {
  rootDir: 'src/components',
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testRegex: '\\.spec\\.js$',
  testPathIgnorePatterns: [],
  coverageDirectory: path.resolve(__dirname, 'reports/unit/coverage'),
  collectCoverageFrom: ['**/*.js', '!**/node_modules/*x*'],
  verbose: true,
}
