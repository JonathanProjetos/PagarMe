const { expect } = require('chai');
const { describe, it } = require('mocha')
const sinon = require('sinon');
const { create, getOne } = require('../../../controllers/TransactionControllers');
const TrasacitonServices = require('../../../services/TransactionService');
const { inputTransaction, dataReponsePayable } = require('../../mocks/mockDataTransaction');

describe('Testando a função do arquivo TransactionControllers/create', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função corretamente com a mensagem Transaction created successfully', async() => {
    const req = {
      body: {
        ...inputTransaction,
      },
      email: 'test@test.com'
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returns({ message: 'Transaction created successfully' }),
    }

    sinon.stub(TrasacitonServices, 'create').resolves({ message: 'Transaction created successfully' });
    
    await create(req, res);

    expect(res.status.calledWith(201)).to.be.equal(true);
    expect(res.json.calledWith({ message: 'Transaction created successfully' })).to.be.equal(true);
    expect(TrasacitonServices.create.calledWith(req.body, req.email)).to.be.equal(true);
      
  });
});

describe('Testando a função do arquivo TransactionControllers/getOne', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('Deve chamar a função corretamente e retornar um array de transações', async() => {
    const req = {
      email: 'test@test.com'
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returns([dataReponsePayable]),
    };

    sinon.stub(TrasacitonServices, 'getOne').resolves([dataReponsePayable]);

    await getOne(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith([dataReponsePayable])).to.be.equal(true);
    expect(TrasacitonServices.getOne.calledWith(req.email)).to.be.equal(true);
  });
});