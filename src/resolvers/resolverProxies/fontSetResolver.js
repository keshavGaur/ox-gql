const {
  VARIATION_TYPE_DESKTOP,
} = require('config').get('CONSTANTS');
const { fontsetHelper, elasticHelper } = require('../../helpers');

function createAssetDetailObject(amsResp, familyResp) {
  // FontSet should only have Desktop Variations
  return fontsetHelper.format(
    amsResp,
    elasticHelper.filterVariationsByType(familyResp, VARIATION_TYPE_DESKTOP),
  );
}

module.exports = {
  createAssetDetailObject,
};
