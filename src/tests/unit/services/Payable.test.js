const { expect } = require('chai');
const { describe, it } = require('mocha')
const sinon = require('sinon');
const { Sequelize } = require('../../../database/models');
const PayableServices = require('../../../services/PayableServices');
const { dataReponsePayable } = require('../../mocks/mockDataTransaction');

describe('Testes unitários para o arquivo PayableServices/Payable.getBalance', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('Deve retornar os recebiveis corretamente', async () => {
    const query = 'paid';
    const email = 'test@test.com';

    sinon.stub(Sequelize.Model, 'findOne').resolves(dataReponsePayable);
    
    const result = await PayableServices.getBalance(query, email);

    expect(result).to.be.an('object');
    expect(result).to.have.property('balance');
  });

  it('Deve retornar um erro 400 se o status não for informado', async () => {
    const query = '';
    const email = '';

    const result = await PayableServices.getBalance(query, email).catch(error => error.message);

    expect(result).to.be.equal('400|Status is required');
  });

  it('Deve retornar um erro 401 se o usuário não for encontrado', async () => {
    const query = 'paid';
    const email = '';

    sinon.stub(Sequelize.Model, 'findOne').resolves(null);

    const result = await PayableServices.getBalance(query, email).catch(error => error.message);

    expect(result).to.be.equal('401|Unauthorized user');
  });
});