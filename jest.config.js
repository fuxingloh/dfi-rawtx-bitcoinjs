module.exports = {
  preset: 'ts-jest',
  testRegex: '((\\.|/)(e2e|test|spec))\\.[jt]sx?$',
  verbose: true,
  clearMocks: true,
  testTimeout: 180000,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ]
}
