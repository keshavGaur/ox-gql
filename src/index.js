/* eslint-disable no-console */
require('dotenv').config();
const { ApolloServer } = require('apollo-server');

const {
  query, inputType,
  scalarTypeDefs, scalarResolvers,
} = require('./schema');
const resolvers = require('./resolvers');

const GithubService = require('./datasources/githubService');

const githubService = new GithubService();

// set up any dataSources our resolvers need
const dataSources = () => ({
  githubService,
});

// the function that sets up the global context for each resolver, using the req
const context = async ({ req }) => {
  // simple auth check on every request
  const authorization = (req.headers && req.headers.authorization);
  return {
    authorization,
  };
};

const initializeApolloServer = async () => {
  try {
    const server = new ApolloServer({
      typeDefs: [
        ...scalarTypeDefs,
        query, inputType,
      ],
      resolvers: {
        ...scalarResolvers,
        ...resolvers,
      },
      dataSources,
      context,
      debug: false,
      formatError: (err) => err,
    });

    // Start our server if we're not in a test env.
    // if we're in a test env, we'll manually start it in a test
    if (process.env.NODE_ENV !== 'test') {
      server
        .listen({ port: 4080 })
        // eslint-disable-next-line no-console
        .then(({ url }) => console.log(`🚀 app running at ${url}`));
    }
    return server;
  } catch (er) {
    console.log(er, { message: 'Could not start server' });
  }
  return null;
};
// Set up Apollo Server
initializeApolloServer();

const uncaughtExceptionHandler = async (err) => {
  console.log(err);
  process.nextTick(() => process.exit(1));
};

const unhandledRejectionHandler = async (reason, p) => {
  console.log(reason || 'Unhandled Rejection at Promise', p);
  process.nextTick(() => process.exit(1));
};

process.on('unhandledRejection', unhandledRejectionHandler);
process.on('uncaughtException', uncaughtExceptionHandler);

// export all the important pieces for integration/e2e tests to use
module.exports = {
  dataSources,
  context,
  typeDefs: {
    query,
    inputType,
  },
  resolvers,
  ApolloServer,
  initializeApolloServer,
};
