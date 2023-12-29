/* eslint-disable no-unused-vars */

const ElasticMock = require('../../../src/datasources/elastic');

const [mockAssetId, mockAssetType] = ['123', 'Family'];
jest.mock('../../../src/datasources/elastic.js', () => jest.fn().mockImplementation(() => ({
  getProductIdsByFamilyIds: () => [
    { id: '101' },
  ],
  filterInventoryByCustomer: () => [
    { id: '101' },
  ],
  getFeatureVector: () => [
    { _source: { reduced_fv: [1, 3], id: '2' } },
  ],
  getSimilarFamiliesOrFonts: () => [
    { _source: { id: '2' } },
  ],
})));

module.exports = ElasticMock;
