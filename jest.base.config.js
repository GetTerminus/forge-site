module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: './src/tsconfig.spec.json',
      ignoreCoverageForAllDecorators: true,
    },
    '__TRANSFORM_HTML__': true,
  },
  transform: {'^.+\\.(ts|js|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js' },
  testMatch: [
    '<rootDir>/**/?(*.)spec.ts?(x)',
    '<rootDir>/**/?(*.)test-sass.js?(x)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx)',
  ],
  reporters: ['default', ['jest-junit', { output: './coverage/junit/report.xml' }]],
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/!(index|public-api|*.module|*.interface|*.constant|*.mock|*.d).ts',
    'src/**/*.directive.ts',
    '!src/**/testing/**',
  ],
  moduleFileExtensions: [
    'ts',
    'js',
    'html',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  setupFilesAfterEnv: [
    '<rootDir>/tooling/jest-setup.ts',
  ],
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/demo/app/$1',
    'assets/(.*)': '<rootDir>/demo/assets/$1',
    'environments/(.*)': '<rootDir>/demo/environments/$1',
    '^@terminus/ui(.*)$': '<rootDir>/src$1/src/public-api.ts',
    '^@terminus/ui(.*)/testing$': '<rootDir>/src$1/testing/src/public-api.ts',
  },
}
