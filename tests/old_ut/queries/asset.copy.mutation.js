const { ApolloError } = require('apollo-server');
const MockAssetMgmtService = require('../__mocks__/assetMgmtService');

const [userId, customerId, groups] = ['971806', '918026', '19775'];
// test will pass only for Id: 101 and type: Folder
module.exports = [{
  id: 'copy Asset by Id',
  mutation: `
  mutation copyFolderToFolder {
    copyFolderToFolder(input: {sourceAssetId: "101", destinationAssetId: "502"}) {
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
      copyFolderToFolder: {
        asset: {
          id: '502',
        },
      },
    },
  },
},
{
  id: 'copy Asset by Id when type is not Folder',
  mutation: `
    mutation copyFontSetToFolder {
      copyFontSetToFolder(input: {sourceAssetId: "101", destinationAssetId: "502"}) {
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
      copyFontSetToFolder: null,
    },
    errors: [
      new ApolloError('Failing test case explicitly'),
    ],
  },
},
{
  id: 'copy Asset by Id to root',
  mutation: `
    mutation copyFontSetToRoot {
      copyFolderToRoot(input: {sourceAssetId: "101"}) {
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
      copyFolderToRoot: {
        asset: {
          id: '101',
        },
      },
    },
  },
}];
