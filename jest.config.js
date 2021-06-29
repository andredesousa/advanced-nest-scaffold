/**
 * Jest configuration file, see link for more information:
 * https://jestjs.io/docs/en/configuration
 *
 * @type { import("@jest/types").Config.InitialOptions }
 */
module.exports = {
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/src/test.ts'],
  testMatch: ['<rootDir>/src/app/**/*.spec.ts'],
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@db/(.*)': '<rootDir>/db/$1',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.build.json',
    },
  },
  coverageReporters: ['json', 'lcov', 'text-summary'],
  collectCoverageFrom: ['src/app/**/*.ts'],
  coverageDirectory: 'reports/coverage',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
