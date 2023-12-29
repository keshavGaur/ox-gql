const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  repositories(userName: String!): [repository]
  repository(repoName: String!): repository
}
`;
module.exports = typeDefs;
