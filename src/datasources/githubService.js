const config = require('config');
const { RESTDataSource } = require('apollo-datasource-rest');

const serviceConfig = config.get('services.github');

class GithubAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serviceConfig.baseURL;
  }

  willSendRequest(request) {
    request.headers.set('authorization', this.context.authorization);
    request.headers.set('accept', 'application/json');
  }

  async getRepositories(name) {
    try {
      const response = await this.get(`/users/${name}/repos`);
      return response.map((el) => el.assetId);
    } catch (err) {
      throw new Error('unable to call github API ');
    }
  }

  async getRepository(userName, repoName) {
    try {
      const response = await this.get(`/users/${userName}/repo`);
      return response.map((el) => el.assetId);
    } catch (err) {
      throw new Error('unable to call github API ');
    }
  }
}

module.exports = GithubAPI;
