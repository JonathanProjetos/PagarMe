const { expect } = require('chai');
const { describe, it } = require('mocha')
const sinon = require('sinon');
const { Sequelize } = require('../../../database/models');
const TransactionService = require('../../../services/TransactionService');
const { dataReponse } = require('../../mocks/mockDataTransaction');

describe('Testes unitários do arquivo TransactionService/Transaction.getOne', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve retornar um erro 400 se o usuário não for encontrado', async () => {
    const body = {}
    const email = ''

    sinon.stub(Sequelize.Model, 'findOne').resolves(null);

    const result = await TransactionService.getOne(body, email).catch(error => error.message);

    expect(result).to.be.equal('401|Unauthorized user');
  });

  it('deve retorna um array com os dados corretamente', async () => {

    const email = 'test@test.com';

    // sinon.stub(Sequelize.Model, 'findOne').resolves({});
    sinon.stub(Sequelize.Model, 'findOne').resolves(dataReponse);

    const result = await TransactionService.getOne(email);

    expect(result).to.be.an('object');
    expect(result).have.property('transactions');
  })
});

describe('Testes unitários do arquivo TransactionService/Transaction.create', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('Deve retornar um erro 400 se o usuário não for encontrado', async () => {
    const body = { ...dataReponse.transactions[0] }
    const email = 'test@test.com'

    sinon.stub(Sequelize.Model, 'findOne').resolves(null);
    sinon.stub(Sequelize.Model, 'create').resolves({});

    const result = await TransactionService.create(body, email).catch(error => error.message);

    expect(result).to.be.equal('401|Unauthorized user');
  });

  it('Deve retornar criar o dado corretamente', async () => {
    const body = { ...dataReponse.transactions[0] }
    const email = 'test@test.com'


    sinon.stub(Sequelize.Model, 'findOne').resolves({});
    sinon.stub(Sequelize.Model, 'create').resolves({message: 'Transaction created successfully'});

    const result = await TransactionService.create(body, email);

    expect(result).to.be.an('object');
    expect(result).to.have.property('message');
  });
});
