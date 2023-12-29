const { format } = require('../../../src/helpers/fontsetHelper');
const { expect } = require('../sinonChaiConfig');

describe('Helper:fontsetHelper spec suite', () => {
  it('test format', () => {
    const ampResp = {
      name: 'xyz',
      description: 'Project x',
      id: 1,
      assetType: 'folder',
      parentId: 1,
      accessIds: ['1', '2', '3'],
      children: [{}],
    };
    const familyResp = {};
    const output = format(ampResp, familyResp);
    expect(output).to.be.eql({
      name: ampResp.name,
      description: ampResp.description,
      id: ampResp.id,
      assetType: ampResp.assetType,
      parentId: ampResp.parentId,
      accessIds: ampResp.accessIds,
      thinChildren: ampResp.children,
      children: familyResp,
    });
  });
});
