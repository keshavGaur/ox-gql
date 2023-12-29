const MockAssetMgmtService = require('../__mocks__/assetMgmtService');

const [userId, customerId, groups] = ['971806', '918026', '19775'];

module.exports = [{
  id: 'Get ASSET query - Query for single asset',
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
  query getSingleAsset {
    asset(id: "101", type: "Folder") {
      ... on Folder {
        ...fields
        children {
          ...fields
        }
      }
    }
  }
    `,
  variables: { },
  headers: { },
  context: {
    dataSources: { assetMgmtAPI: new MockAssetMgmtService() }, userId, customerId, groups,
  },
  expected: {
    data: {
      asset: {
        accessIds: null,
        __typename: 'Folder',
        assetType: 'Folder',
        children: null,
        depth: null,
        id: '101',
        name: 'Test',
        parentId: null,
      },
    },
  },
}];
