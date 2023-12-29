const assetsQuery = require('./assets.query');
const assetQuery = require('./asset.query');
const deleteMutation = require('./asset.delete.mutation');
const moveMutation = require('./asset.move.mutation');
const copyMutation = require('./asset.copy.mutation');
const sharingQuery = require('./sharing.query');
const favoriteMutation = require('../mutations/addFavorite.mutation');
const unFavoriteMutation = require('../mutations/removeFavorite.mutation');
const createFolder = require('../mutations/createFolder.mutation');
const editFolder = require('../mutations/editFolder.mutation');
const tagsQuery = require('./tags.query');
const similarityQuery = require('./similarity.query');

module.exports = {
  testCases: assetsQuery
    .concat(assetQuery)
    .concat(deleteMutation)
    .concat(sharingQuery)
    .concat(moveMutation)
    .concat(copyMutation)
    .concat(favoriteMutation)
    .concat(unFavoriteMutation)
    .concat(createFolder)
    .concat(editFolder)
    .concat(tagsQuery)
    .concat(similarityQuery),
};
