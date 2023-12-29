module.exports = {
  // 'check-coverage': true,
  // branches: 90,
  // lines: 90,
  // functions: 90,
  // statements: 90,
  include: [
    'src/**/*.js',
  ],
  all: true,
  reporter: [
    'lcov',
    'text',
  ],
};
