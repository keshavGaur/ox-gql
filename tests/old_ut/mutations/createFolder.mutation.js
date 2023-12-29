const MockAssetMgmtService = require('../__mocks__/assetMgmtService');

const [userId, customerId, groups] = ['971806', '918026', '19775'];
// test will pass only for Id: 101 and type: Folder
module.exports = [
  {
    id: 'CREATE folder with correct input',
    mutation: `
  mutation createFolder($input:CreateFolderInput!){
    createFolder(input : $input) {
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
      },
    },
    headers: { },
    context: {
      dataSources: { assetMgmtAPI: new MockAssetMgmtService() }, userId, customerId, groups,
    },
    expected: {
      data: {
        createFolder: {
          asset: {
            id: '123',
          },
        },
      },
    },
  },
];
