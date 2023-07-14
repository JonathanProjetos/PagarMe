const { expect } = require('chai');
const { describe, it } = require('mocha')
const sinon = require('sinon');
const { getBalance } = require('../../../controllers/PayableControllers');
const PayableServices = require('../../../services/PayableServices');
const { outputPayable } = require('../../mocks/mockDataTransaction');

describe('Testando a função do arquivo PayableControllers/getBalance', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função corretamente e retornar um objeto com a soma dos recebiveis', async() => {
    const req = {
      email: 'test@test.com',
      query: {
        status: 'paid'
      }
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returns({  }),
    }

    sinon.stub(PayableServices, 'getBalance').resolves(outputPayable);

    await getBalance(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(outputPayable)).to.be.equal(true);
    expect(PayableServices.getBalance.calledWith(req.query.status, req.email)).to.be.equal(true);

  });
});