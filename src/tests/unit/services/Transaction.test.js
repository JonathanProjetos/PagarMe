const { expect } = require('chai');
const { describe, it } = require('mocha')
const sinon = require('sinon');
const { Sequelize } = require('../../../database/models');
const TransactionService = require('../../../services/TransectionService');
const UserServices = require('../../../services/UserService');


describe('Testes unitários do arquivo TransactionService/Transaction', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve retornar um erro 400 se o usuário não for encontrado', async () => {
    const body = {}
    const email = ''

    sinon.stub(Sequelize.Model, 'findOne').resolves(null);

    const result = await TransactionService.getAll(body, email).catch(error => error.message);

    expect(result).to.be.equal('400|User not found');
  });
});