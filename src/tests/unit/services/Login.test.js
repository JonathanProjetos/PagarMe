const { expect } = require('chai');
const { describe, it } = require('mocha')
const sinon = require('sinon');
const { Sequelize } = require('../../../database/models');
const UserService = require('../../../services/UserService');
const bcryptjs = require('bcryptjs');

describe('Testes unitários do service Login', () => {
  afterEach(() => {
    sinon.restore();
  });
  

  it('Deve retornar um erro 400 se o usuário não for encontrado', async () => {
    const body = {
      email: 'test@test.com',
      password: '123456'
    };

    sinon.stub(Sequelize.Model, 'findOne').resolves(null);

    expect(await UserService.Login(body).catch((err) => err.message)).to.be.equal('400|User not found');
  });

  it('Deve retornar um erro caso a senha esteja incorreta', async () => {
    const body = {
      email: 'test@test.com',
      password: '123456'
    };

    sinon.stub(Sequelize.Model, 'findOne').resolves(body);
    sinon.stub(bcryptjs, 'compareSync').resolves(false);

    expect(await UserService.Login(body).catch((err) => err.message)).to.be.equal('400|Password does not match');
  });

  it('Deve retornar um token caso o login seja bem sucedido', async () => {
    const body = {
      email: 'test@test.com',
      password: '123456'
    };

    const dataUser = {
      email: 'test@test.com',
      hashPassword: bcryptjs.hashSync('123456', 10)
    }

    sinon.stub(Sequelize.Model, 'findOne').resolves(dataUser);
    sinon.stub(bcryptjs, 'compareSync').resolves(true);

    const token = await UserService.Login(body);

    expect(token).to.be.an('object');
    expect(token).to.have.property('token');
  });
});