const MockTagService = require('../../../src/datasources/tagService');

jest.mock('../../../src/datasources/tagService', () => jest.fn().mockImplementation(() => ({
  putBulk: () => [{
    status: 200,
    body: {
      ownerID: '1231', id: 23410899, appID: 'mosaic_pre_prod', modifiedBy: '928656', createdBy: '928656',
    },
    id: 23410899,
    messsage: 'successful',
  }],
  postTags: () => ([
    {
      body: {
        ownerID: '1231', name: 'xxyy401', createdBy: '928656', appID: 'mosaic_pre_prod', id: 23410899,
      },
      status: 201,
    },
  ]),
  postAndPutTags: () => ([
    {
      status: 201,
      body: {
        ownerID: '1231',
        name: 'xxyy402',
        createdBy: '928656',
        appID: 'mosaic_pre_prod',
        id: 24347589,
      },
    },
    {
      status: 200,
      id: 24347577,
      messsage: 'successful',
      body: {
        ownerID: '1231',
        id: 24347577,
        appID: 'mosaic_pre_prod',
        modifiedBy: '928656',
        createdBy: '928656',
        name: 'xxyy401',
      },
    },
  ]),
})));

module.exports = MockTagService;
