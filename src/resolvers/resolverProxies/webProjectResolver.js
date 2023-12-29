const { VARIATION_TYPE_WEB } = require('config').get('CONSTANTS');
const { webProjectHelper, elasticHelper } = require('../../helpers');

function createAssetDetailObject(amsResp, familyResp) {
  // WebProject should only have web variations
  return webProjectHelper.format(
    amsResp,
    elasticHelper.filterVariationsByType(familyResp, VARIATION_TYPE_WEB),
  );
}

module.exports = {
  createAssetDetailObject,
};
