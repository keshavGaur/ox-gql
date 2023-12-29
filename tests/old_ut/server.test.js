const { makeExecutableSchema } = require('graphql-tools');
const { graphql } = require('graphql');
// the actual resolvers
const resolvers = require('../../src/resolvers');
// the mock service
const typeDefs = require('../../src/schema');

const gqlQuery = require('./queries');

describe('Mosaic My Library unit Tests', () => {
  const cases = gqlQuery.testCases;
  // make the actual schema and resolvers executable
  const schema = makeExecutableSchema({
    typeDefs: [
      typeDefs.query, typeDefs.mutation, typeDefs.inputType,
      typeDefs.tagInputType,
      ...typeDefs.scalarTypeDefs,
    ],
    resolvers: {
      ...typeDefs.scalarResolvers,
      ...resolvers,
    },
  });

  // running the test for each case in the cases array
  cases.forEach((obj) => {
    const {
      id, query, mutation, variables, context, expected,
    } = obj;

    test(`query: ${id}`, async () => {
      const result = await graphql(schema, query || mutation, null, context, variables);
      return expect(result).toEqual(expected);
    });
  });
});
