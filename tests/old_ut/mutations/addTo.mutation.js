const MockAssetMgmtService = require('../__mocks__/assetMgmtService');
const MockElastic = require('../__mocks__/elasticAPI');

const [userId, customerId, groups] = ['971806', '918026', '19775'];
// test will pass only for Id: 101 and type: Folder
module.exports = [
  {
    id: 'ADD to fontSet',
    mutation: `
    mutation addToFontSet($input: AddRemoveInput!) {
        addToFontSet(input: $input) {
            id
            name
            assetType
            description
            parentId
            accessIds
        }
      }
    `,
    variables: {
      input: {
        targets: ['4158001d-149d-45e3-8e66-8e182fa909ca'],
        sources: [{
          id: '550',
          type: 'Family',
        }],
      },
    },
    headers: { },
    context: {
      dataSources: {
        assetMgmtAPI: new MockAssetMgmtService(),
        elasticAPI: new MockElastic(),
      },
      userId,
      customerId,
      groups,
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
