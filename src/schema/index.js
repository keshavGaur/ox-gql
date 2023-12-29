const inputType = require('./github-input');
const query = require('./query');
const { scalarTypeDefs, scalarResolvers } = require('./scalarTypes');

module.exports = {
  inputType,
  query,
  scalarTypeDefs,
  scalarResolvers,
};
