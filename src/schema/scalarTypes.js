const { DateTimeResolver, DateTimeTypeDefinition } = require('graphql-scalars');

module.exports = {
  scalarTypeDefs: [
    DateTimeTypeDefinition,
  ],
  scalarResolvers: { DateTime: DateTimeResolver },
};
