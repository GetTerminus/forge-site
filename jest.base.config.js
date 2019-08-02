module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/!(index|public-api|*.module|*.interface|*.constant|*.mock|*.d).ts',
    'src/**/*.directive.ts',
    '!src/**/testing/**',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  globals: {
    'ts-jest': {
      astTransformers: [require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')],
      diagnostics: false,
      ignoreCoverageForAllDecorators: true,
      stringifyContentPathRegex: '\\.html$',
      tsConfig: './tsconfig.spec.json',
    },
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'html',
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^environments/(.*)$': '<rootDir>/src/environments/$1',
  },
  preset: 'jest-preset-angular',
  reporters: ['default', ['jest-junit', { output: '<rootDir>/coverage/junit/report.xml' }]],
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/tooling/jest-setup.ts'],
  snapshotSerializers: [
    'jest-preset-angular/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
  testMatch: [
    '<rootDir>/**/?(*.)spec.ts?(x)',
    '<rootDir>/**/?(*.)test-sass.js?(x)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  transform: {'^.+\\.(ts|js|html)$': 'ts-jest'},
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx)',
  ],
}
