const p = require('../package.json');

module.exports = {
  app: {
    name: p.name,
    description: p.description,
  },
  env: {
    mode: process.env.NODE_ENV,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 4080,
  },
  services: {
    github: {
      baseURL: 'https://api.github.com',
    },
  },
};
