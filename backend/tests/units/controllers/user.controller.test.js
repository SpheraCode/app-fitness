const chai = require('chai');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const sinonChai = require('sinon-chai').default;

const { userService } = require('../../../src/services/index');
const { userController } = require('../../../src/controllers/index')
const { clientData, userByEmailData, memberData, invalidUserData, userFromServiceInvalidValue } = require('../../mocks/user.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Realizando testes - USER CONTROLLER:', function () {
  afterEach(() => {
    sinon.restore();
  });

  it('Inserindo client com sucesso - status 201', async function () {
    sinon.stub(userService, 'createClient').resolves(clientData);
    sinon.stub(userService, 'getUserByEmail').resolves(null)
    sinon.stub(jwt, 'sign').returns('fake-jwt-token');

    const token = { token: 'fake-jwt-token' }

    const req = {
      params: { },
      body: clientData,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await userController.createUser(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(token);
  });

  it('Inserindo member com sucesso - status 201', async function () {
    sinon.stub(userService, 'createClient').resolves(memberData);
    sinon.stub(userService, 'getUserByEmail').resolves(null)
    sinon.stub(jwt, 'sign').returns('fake-jwt-token');

    const token = { token: 'fake-jwt-token' }

    const req = {
      params: { },
      body: clientData,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await userController.createUser(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(token);
  });

  it('Retorna erro ao tentar inserir member ou client já existente no banco - status 409', 
    async function () {
    sinon.stub(userService, 'createClient').resolves(clientData);
    sinon.stub(userService, 'getUserByEmail').resolves(userByEmailData)
    sinon.stub(jwt, 'sign').returns('fake-jwt-token');

    const req = {
      params: { },
      body: clientData,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await userController.createUser(req, res);
    expect(res.status).to.have.been.calledWith(409);
    expect(res.json).to.have.been.calledWith({message: 'User already registered'});
  });
});