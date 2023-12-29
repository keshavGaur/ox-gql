const MockAssetMgmtService = require('../__mocks__/assetMgmtService');

const [userId, customerId, groups] = ['971806', '918026', '19775'];

module.exports = [{
  id: 'Get ASSETS query',
  query: `
  fragment fields on Asset{
    id
    name
    assetType
    accessIds
    __typename
    depth
    parentId
  }
  query getAssets($input: GetAssetsInput) {
    assets(input: $input) {
      ... on Folder {
        ...fields
        children {
          ...fields
        }
      }
      ... on FontSet {
        ...fields
      }
      ... on WebProject {
        ...fields
      }
      ... on DigitalAd {
        ...fields
      }
    }
  }
    `,
  variables: { input: { depth: 10 } },
  headers: { },
  context: {
    dataSources: { assetMgmtAPI: new MockAssetMgmtService() }, userId, customerId, groups,
  },
  expected: {
    data: {
      assets: [{
        accessIds: null,
        __typename: 'Folder',
        assetType: 'Folder',
        children: null,
        depth: null,
        id: '101',
        name: 'Test',
        parentId: null,
      },
      ],
    },
  },
}];
