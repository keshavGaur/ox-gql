const MockAssetMgmtService = require('../__mocks__/assetMgmtService');
const MessageServiceMock = require('../__mocks__/messageService');
const NotificationServiceMock = require('../__mocks__/notificationService');

const [userId, customerId, groups] = ['971806', '918026', '19775'];

module.exports = [{
  id: 'Get sharing info for asset(s)',
  query: `
  query {
    sharingInfoForAssets(assets:[
      {
        assetType:"FontSet",
        id:"0407f675-e556-440b-89a1-48ede7621d4c"
      }
    ]){
      id,
      sharingDetails{
        shareeType,
        accessIdMap{
          shareeId,
          accessId
        }
      }
    }
  }
    `,
  variables: {},
  headers: {},
  context: {
    dataSources: { assetMgmtAPI: new MockAssetMgmtService() }, userId, customerId, groups,
  },
  expected: {
    data: {
      sharingInfoForAssets: [
        {
          id: '0407f675-e556-440b-89a1-48ede7621d4c',
          sharingDetails: [
            {
              shareeType: 'user',
              accessIdMap: [
                {
                  shareeId: 'b2f032b6-57cd-11ea-80e8-0eed97b20d6b',
                  accessId: 1,
                },
              ],
            },
            {
              shareeType: 'group',
              accessIdMap: [
                {
                  shareeId: '1234',
                  accessId: 4,
                },
              ],
            },
            {
              shareeType: 'public',
              accessIdMap: [],
            },
          ],
        },
      ],
    },
  },
}, {
  id: 'Update sharing info for an asset',
  mutation: `
  mutation {
    updateSharingInfo(input: {
       id: "0407f675-e556-440b-89a1-48ede7621d4c"
       assetType: "FontSet"
       notify: true
       data: [{
        action: "GRANT"
        payload:[{
          shareeType: "User"
        accessIdMap: [{
          shareeId: "507fe9be-1665-46e6-844c-0512cab6cc87"
          accessId: 4
        }]
        }
        ]
      }]
    }){
      id,
      assetType,
      sharingDetails{
        shareeType
      }
    }
  }
    `,
  variables: {},
  headers: {},
  context: {
    dataSources: {
      assetMgmtAPI: new MockAssetMgmtService(),
      messageService: new MessageServiceMock(),
      notificationAPI: new NotificationServiceMock(),
    },
    userId,
    customerId,
    groups,
  },
  expected: {
    data: {
      updateSharingInfo: {
        id: '0407f675-e556-440b-89a1-48ede7621d4c',
        assetType: 'FontSet',
        sharingDetails: [
          {
            shareeType: 'user',
          },
          {
            shareeType: 'group',
          },
          {
            shareeType: 'public',
          },
        ],
      },
    },
  },
}];
