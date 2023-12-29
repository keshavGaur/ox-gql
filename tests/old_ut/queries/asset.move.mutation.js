const { ApolloError } = require('apollo-server');
const MockAssetMgmtService = require('../__mocks__/assetMgmtService');

const [userId, customerId, groups] = ['971806', '918026', '19775'];
// test will pass only for Id: 101 and type: Folder
module.exports = [{
  id: 'Move Asset by Id',
  mutation: `
  mutation moveFolderToFolder {
    moveFolderToFolder(input: {sourceAssetId: "101", destinationAssetId: "502"}) {
        asset{
            id
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
      moveFolderToFolder: {
        asset: {
          id: '502',
        },
      },
    },
  },
},
{
  id: 'Move Asset by Id when type is not Folder',
  mutation: `
    mutation moveFontSetToFolder {
      moveFontSetToFolder(input: {sourceAssetId: "101", destinationAssetId: "502"}) {
         asset{
             id
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
      moveFontSetToFolder: null,
    },
    errors: [
      new ApolloError('Failing test case explicitly'),
    ],
  },
},
{
  id: 'Move Asset by Id to root',
  mutation: `
    mutation moveFontSetToRoot {
      moveFolderToRoot(input: {sourceAssetId: "101"}) {
         asset{
             id
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
      moveFolderToRoot: {
        asset: {
          id: '101',
        },
      },
    },
  },
}];
