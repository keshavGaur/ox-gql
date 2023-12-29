const AssetMgmtServiceMock = require('../../../src/datasources/assetMgmtService');

const [mockUserId, mockCustomerId, mockGroups] = ['971806', '918026', '19775'];
jest.mock('../../../src/datasources/assetMgmtService', () => jest.fn().mockImplementation(() => ({
  getAssets: () => [
    { id: '101', assetType: 'Folder', name: 'Test' },
  ],
  getAssetDetail: (assetType, id) => ({ id, assetType, name: 'Test' }),
  context: {
    userId: mockUserId,
    customerId: mockCustomerId,
    groups: mockGroups,
  },
  deleteAsset: () => true,
  getSharingDetailForAnAsset: () => ({
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
  }),
  putAssetSharing: () => ({
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
  }),
  moveAsset: (destinationAssetId, destinationAssetType, inputPayload) => {
    if (inputPayload.assetId === '101' && inputPayload.assetType === 'Folder') {
      return true;
    }
    throw new Error('Failing test case explicitly');
  },
  copyAsset: (destinationAssetId, destinationAssetType, inputPayload) => {
    if (inputPayload.assetId === '101' && inputPayload.assetType === 'Folder') {
      return { id: '101', assetType: 'Folder', name: 'Test' };
    }
    throw new Error('Failing test case explicitly');
  },
  postAsset: () => 123,
  putAsset: (id, name, description) => ({
    id,
    name,
    description,
    assetType: 'Folder',
  }),
  addRemoveToAsset: (destinationAssetIDs, destinationAssetType, inputPayload, actionType) => ({
    action: actionType,
    payload: {
      target: {
        ids: destinationAssetIDs,
      },
      assets: inputPayload,
    },
  }),
})));

module.exports = AssetMgmtServiceMock;
