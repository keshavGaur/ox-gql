const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const createSandbox = () => sinon.createSandbox();
const { expect } = chai;
chai.use(sinonChai);

module.exports = {
  expect,
  createSandbox,
};
