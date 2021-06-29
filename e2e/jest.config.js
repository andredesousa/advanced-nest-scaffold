/**
 * Jest configuration file, see link for more information:
 * https://jestjs.io/docs/en/configuration
 *
 * @type { import("@jest/types").Config.InitialOptions }
 */
module.exports = {
  rootDir: '../',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/e2e/specs/**/*.spec.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@db/(.*)': '<rootDir>/db/$1',
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.build.json',
    },
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports/e2e',
        filename: 'index.html',
      },
    ],
  ],
};
