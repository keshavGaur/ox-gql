const MockAssetMgmtService = require('../__mocks__/assetMgmtService');

const [userId, customerId, groups] = ['971806', '918026', '19775'];
// test will pass only for Id: 101 and type: Folder
module.exports = [
  {
    id: 'CREATE folder with correct input',
    mutation: `
    mutation ($input:EditFolderInput!) {
      editFolder(input : $input) {
              asset{
                id
              }
      }
    }
    `,
    variables: {
      input: {
        name: 'myFolder',
        description: '123',
        id: '123456',
      },
    },
    headers: { },
    context: {
      dataSources: { assetMgmtAPI: new MockAssetMgmtService() }, userId, customerId, groups,
    },
    expected: {
      data: {
        editFolder: {
          asset: {
            id: '123456',
          },
        },
      },
    },
  },
];
