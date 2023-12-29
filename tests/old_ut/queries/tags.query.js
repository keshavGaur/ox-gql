const MockTagService = require('../__mocks__/tagService');

const userId = '1234';

module.exports = [{
  id: 'Update Tag association with Resources',
  mutation: `mutation {
    addTagAssociationToResources(input: {
      tags: [{
        id: 23410899,
        ownerId: "1231",
        name: "xxyy401",
        associations: [{
          id: "1"
        },{
          id: "2"
        },{
          id: "3"
        }]
      }]
    }){
      result {
        id,
        tagsInfo {
          tags {
            name,
            id
          }
        }
      }
    }
  }`,
  variables: {},
  headers: {},
  context: {
    dataSources: {
      tagAPI: new MockTagService(),
    },
    userId,
  },
  expected: {
    data: {
      addTagAssociationToResources: {
        result: [
          {
            id: '1',
            tagsInfo: {
              tags: [
                {
                  name: 'xxyy401',
                  id: 23410899,
                },
              ],
            },
          },
          {
            id: '2',
            tagsInfo: {
              tags: [
                {
                  name: 'xxyy401',
                  id: 23410899,
                },
              ],
            },
          },
          {
            id: '3',
            tagsInfo: {
              tags: [
                {
                  name: 'xxyy401',
                  id: 23410899,
                },
              ],
            },
          },
        ],
      },
    },
  },
}, {
  id: 'Create Tag And association with Family',
  mutation: `mutation {
    addTagsAndAssociationsForFamily(input: {
    tags : [{
        ownerId : "1231",
        name : "xxyy401",
        id: 24347577,
        associations : [{
        id : "1"
        },{
        id : "2"
        }]
    },{
        ownerId : "1231",
        name : "xxyy402",
        associations : [{
        id : "1"
        },{
        id : "2"
        }]
    }]
    }){
    result {
        id,
        tagsInfo {
        tags {
            id
        }
        }
    }
    }
}`,
  variables: {},
  headers: {},
  context: {
    dataSources: {
      tagAPI: new MockTagService(),
    },
    userId,
  },
  expected: {
    data: {
      addTagsAndAssociationsForFamily: {
        result: [
          {
            id: '1',
            tagsInfo: {
              tags: [
                {
                  id: 24347589,
                },
                {
                  id: 24347577,
                },
              ],
            },
          },
          {
            id: '2',
            tagsInfo: {
              tags: [
                {
                  id: 24347589,
                },
                {
                  id: 24347577,
                },
              ],
            },
          },
        ],
      },
    },
  },
}];
