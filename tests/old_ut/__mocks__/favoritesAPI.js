/* eslint-disable no-unused-vars */

const FavoriteServiceMock = require('../../../src/datasources/favorites');

const [mockAssetId, mockAssetType] = ['123', 'Family'];
jest.mock('../../../src/datasources/favorites', () => jest.fn().mockImplementation(() => ({
  getFavoriteFamilyIds: () => [
    { assetId: '101', assetType: 'Folder', name: 'Test' },
  ],
  context: {
    assetId: mockAssetId,
    assetType: mockAssetType,
  },
  removeFavorite: (assetId, assetType) => (assetId),
  addFavorite: (assetId, assetType) => (assetId),
})));

module.exports = FavoriteServiceMock;
