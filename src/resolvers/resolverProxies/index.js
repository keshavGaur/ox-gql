const {
  TYPE_WEB_PROJECT,
  TYPE_FONT_SET,
  TYPE_DIGITAL_AD,
} = require('config').get('CONSTANTS');

const fontSetResolver = require('./fontSetResolver');
const webProjectResolver = require('./webProjectResolver');

module.exports = {
  [TYPE_FONT_SET]: fontSetResolver,
  [TYPE_DIGITAL_AD]: webProjectResolver,
  [TYPE_WEB_PROJECT]: webProjectResolver,
};
