/**
 * Jest configuration file, see link for more information:
 * https://jestjs.io/docs/en/configuration
 *
 * @type { import("@jest/types").Config.InitialOptions }
 */
module.exports = {
  rootDir: '.',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/specs/**/*.spec.ts'],
  testTimeout: 15000,
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.build.json',
    },
  },
  maxWorkers: 1,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports/smoke',
        filename: 'index.html',
      },
    ],
  ],
};
