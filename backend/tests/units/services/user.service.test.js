const { expect } = require('chai');
const sinon = require('sinon');
const { userService } = require('../../../src/services/index');
const prisma = require('../../../src/db');
const { clientData, memberData, userByEmailData } = require('../../mocks/user.mock')

describe('Realizando testes - USER SERVICE:', function () {
  // Depois de cada teste, restauramos o comportamento original
  afterEach(() => {
    sinon.restore();
  });

  it('Inserindo client com sucesso', async function () {
    const createStub = prisma.baseUSer.create = sinon.stub().resolves(clientData)

    const responseService = await userService.createClient(clientData);

    expect(responseService).to.deep.equal(clientData);
    expect(createStub.calledOnce).to.be.true;
    expect(createStub.calledWith({ data: clientData })).to.be.true;
  });

  it('Inserindo member com sucesso', async function () {
    const createStub = prisma.baseUSer.create = sinon.stub().resolves(memberData)

    const responseService = await userService.createClient(memberData);

    expect(responseService).to.deep.equal(memberData);
    expect(createStub.calledOnce).to.be.true;
    expect(createStub.calledWith({ data: memberData })).to.be.true;
  });

  it('Buscando usuário com base no email', async function () {
    const createStub = prisma.baseUSer.findUnique = sinon.stub().resolves(userByEmailData)

    const responseService = await userService.getUserByEmail(userByEmailData.email)

    expect(responseService).to.deep.equal(userByEmailData);
    expect(createStub.calledOnce).to.be.true;
  });
})
