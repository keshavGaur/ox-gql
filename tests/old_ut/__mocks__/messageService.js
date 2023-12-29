const MessageServiceMock = require('../../../src/datasources/messageService');

jest.mock('../../../src/datasources/messageService', () => jest.fn().mockImplementation(() => ({
  getRevokeInfoAndPublish: () => jest.fn(),
})));

module.exports = MessageServiceMock;
