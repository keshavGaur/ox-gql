const companyAndUserSettingsError = require('../../../src/customErrors/forbiddenByCompanyOrUserSettings');

const MockAssetMgmtService = require('../__mocks__/assetMgmtService');

const [userId, customerId, groups] = ['971806', '918026', '19775'];
module.exports = [{
  id: 'Deleting folder',
  mutation: `
  mutation deleteFolder {
    deleteFolder(assetId: "101") {
        asset{
            id
        }
    }
  }
    `,
  variables: { },
  headers: { },
  context: {
    dataSources: {
      assetMgmtAPI: new MockAssetMgmtService(),
    },
    userId,
    customerId,
    groups,
  },
  expected: {
    data: {
      deleteFolder: {
        asset: {
          id: '101',
        },
      },
    },
  },
},
{
  id: 'Deleting fontset',
  mutation: `
    mutation deleteFontSet {
      deleteFontSet(assetId: "101") {
         asset{
             id
         }
      }
    }
      `,
  variables: { },
  headers: { },
  context: {
    dataSources: {
      assetMgmtAPI: new MockAssetMgmtService(),
    },
    userId,
    customerId,
    groups,
    companySettings: {
      webProjectEnabled: true,
      digitalAdEnabled: true,
      thirdParyFontsAllowed: true,
    },
  },
  expected: {
    data: {
      deleteFontSet: {
        asset: {
          id: '101',
        },
      },
    },
  },
},
{
  id: 'Deleting webproject with disallowed company settings',
  mutation: `
    mutation deleteWebProject {
      deleteWebProject(assetId: "101") {
         asset{
             id
         }
      }
    }
      `,
  variables: { },
  headers: { },
  context: {
    dataSources: {
      assetMgmtAPI: new MockAssetMgmtService(),
    },
    userId,
    customerId,
    groups,
    companySettings: {
      webProjectEnabled: false,
      digitalAdEnabled: false,
      thirdParyFontsAllowed: true,
    },
  },
  expected: {
    data: {
      deleteWebProject: null,
    },
    errors: [
      new Error(companyAndUserSettingsError.ForbiddenByCompanyOrUserSettings.code),
    ],
  },
},
{
  id: 'Deleting digitalad with disallowed company settings',
  mutation: `
    mutation deleteDigitalAd {
      deleteDigitalAd(assetId: "101") {
         asset{
             id
         }
      }
    }
      `,
  variables: { },
  headers: { },
  context: {
    dataSources: {
      assetMgmtAPI: new MockAssetMgmtService(),
    },
    userId,
    customerId,
    groups,
    companySettings: {
      webProjectEnabled: true,
      digitalAdEnabled: false,
      thirdParyFontsAllowed: true,
    },
  },
  expected: {
    data: {
      deleteDigitalAd: null,
    },
    errors: [
      new Error(companyAndUserSettingsError.ForbiddenByCompanyOrUserSettings.code),
    ],
  },
},
{
  id: 'Deleting digitalad with allowed company settings',
  mutation: `
    mutation deleteDigitalAd {
      deleteDigitalAd(assetId: "101") {
         asset{
             id
         }
      }
    }
      `,
  variables: { },
  headers: { },
  context: {
    dataSources: {
      assetMgmtAPI: new MockAssetMgmtService(),
    },
    userId,
    customerId,
    groups,
    companySettings: {
      webProjectEnabled: true,
      digitalAdEnabled: true,
      thirdParyFontsAllowed: true,
    },
  },
  expected: {
    data: {
      deleteDigitalAd: {
        asset: {
          id: '101',
        },
      },
    },
  },
},
{
  id: 'Deleting webproject with allowed company settings',
  mutation: `
    mutation deleteWebProject {
      deleteWebProject(assetId: "101") {
         asset{
             id
         }
      }
    }
      `,
  variables: { },
  headers: { },
  context: {
    dataSources: {
      assetMgmtAPI: new MockAssetMgmtService(),
    },
    userId,
    customerId,
    groups,
    companySettings: {
      webProjectEnabled: true,
      digitalAdEnabled: true,
      thirdParyFontsAllowed: true,
    },
  },
  expected: {
    data: {
      deleteWebProject: {
        asset: {
          id: '101',
        },
      },
    },
  },
}];
