const {
  TYPE_WEB_PROJECT,
  TYPE_FONT_SET,
  TYPE_DIGITAL_AD,
} = require('config').get('CONSTANTS');

const areWebProjectsEnabled = (companySettings) => companySettings
  && companySettings.webProjectEnabled;

const areDigitalAdsEnabled = (companySettings) => companySettings
  && areWebProjectsEnabled(companySettings) && companySettings.digitalAdEnabled;

const areFontSetsEnabled = (userSettings) => userSettings
  && userSettings.fontSetCreationAllowed;

function validate(userSettings, companySettings, assetType) {
  switch (assetType) {
    case TYPE_FONT_SET:
      return areFontSetsEnabled(userSettings);
    case TYPE_WEB_PROJECT:
      return areWebProjectsEnabled(companySettings);
    case TYPE_DIGITAL_AD:
      return areDigitalAdsEnabled(companySettings);
    default:
      return false;
  }
}

module.exports = {
  validate,
};
