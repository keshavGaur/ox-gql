const MockElasticService = require('../__mocks__/elasticAPI');

module.exports = [{
  id: 'Get similar families',
  query: `query {
    getSimilarData(id:"14", type:Family){
        type,
        ids
    }
  }`,
  variables: {},
  headers: {},
  context: {
    dataSources: {
      elasticAPI: new MockElasticService(),
    },
  },
  expected: {
    data: {
      getSimilarData: {
        type: 'Family',
        ids: [
          '2',
        ],
      },
    },
  },
}, {
  id: 'Get similar products',
  query: `query {
      getSimilarData(id:"141", type:Product){
          type,
          ids
      }
    }`,
  variables: {},
  headers: {},
  context: {
    dataSources: {
      elasticAPI: new MockElasticService(),
    },
  },
  expected: {
    data: {
      getSimilarData: {
        type: 'Product',
        ids: [
          '2',
        ],
      },
    },
  },
}];
