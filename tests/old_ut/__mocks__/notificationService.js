const NotificationServiceMock = require('../../../src/datasources/notificationService');

jest.mock('../../../src/datasources/notificationService', () => jest.fn().mockImplementation(() => ({
  sendEmailNotificationViaAMQP: () => jest.fn(),
})));

module.exports = NotificationServiceMock;
