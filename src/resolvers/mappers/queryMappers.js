const _ = require('lodash');

const githubResolver = require('../resolverMethods/githubResolver');

module.exports = {
  repositories: async (__, filters, {
    dataSources,
  }, info) => {
    try {
      const res = githubResolver.getRepositories({
        apis: dataSources, filters, info,
      });

      return res;
    } catch (err) {
      throw new Error('Unable to fetch repositories data');
    }
  },
  repository: async (__, filters, {
    dataSources,
  }, info) => {
    try {
      const res = githubResolver.getRepository({
        apis: dataSources, filters, info,
      });

      return res;
    } catch (err) {
      throw new Error('Unable to fetch repository data');
    }
  },
};
