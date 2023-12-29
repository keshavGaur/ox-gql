const FavoriteService = require('../__mocks__/favoritesAPI');

const [userId, customerId, groups] = ['971806', '918026', '19775'];
module.exports = [{
  id: 'Remove favorite Mutation',
  mutation: `
  mutation removeFavorite {
    removeFavorite(assetId: "101", assetType:"Family") {
            id
    }
  }
    `,
  variables: { },
  headers: { },
  context: {
    dataSources: { favoritesAPI: new FavoriteService() }, userId, customerId, groups,
  },
  expected: {
    data: {
      removeFavorite: {
        id: '101',
      },
    },
  },
},
];
