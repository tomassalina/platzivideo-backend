const MongoLib = require('../lib/apiKeys.mongo');

class ApiKeysService {
  constructor() {
    this.mongoDB = new MongoLib();
  }

  async getApiKey({ token }) {
    const [apiKey] = await this.mongoDB.getAll({ token });
    return apiKey;
  }
}

module.exports = ApiKeysService;
