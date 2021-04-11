const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'none',
  jsxBracketSameLine: true
};
