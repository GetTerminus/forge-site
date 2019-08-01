module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: './src/tsconfig.spec.json',
      ignoreCoverageForAllDecorators: true,
    },
    '__TRANSFORM_HTML__': true,
  },
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
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/demo/app/$1',
    'assets/(.*)': '<rootDir>/demo/assets/$1',
    'environments/(.*)': '<rootDir>/demo/environments/$1',
  },
}
