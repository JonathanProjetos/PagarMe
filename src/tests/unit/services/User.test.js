const { expect } = require('chai');
const { describe, it } = require('mocha')
const sinon = require('sinon');
const { Sequelize } = require('../../../database/models');
const UserService = require('../../../services/UserService');
const bcryptjs = require('bcryptjs');

describe('Testes unitários do arquivo UserService/Login', () => {
  afterEach(() => {
    sinon.restore();
  });
  

  it('Deve retornar um erro 400 se o usuário não for encontrado', async () => {
    const body = {
      email: 'test@test.com',
      password: '123456'
    };

    sinon.stub(Sequelize.Model, 'findOne').resolves(null);

    expect(await UserService.Login(body).catch((err) => err.message)).to.be.equal('404|User not found');
  });

  it('Deve retornar um erro caso a senha esteja incorreta', async () => {
    const body = {
      email: 'test@test.com',
      password: '123450'
    };

    const dataUser = {
      email: 'test@test.com',
      hashPassword: bcryptjs.hashSync('123456', 10)
    }

    sinon.stub(Sequelize.Model, 'findOne').resolves(dataUser);
    sinon.stub(bcryptjs, 'compareSync').returns(false);

    expect(await UserService.Login(body).catch((err) => err.message)).to.be.equal('401|Password does not match');
  });

  it.skip('Deve retornar um token caso o login seja bem sucedido', async () => {
    const body = {
      email: 'test@test.com',
      password: '123456'
    };

    const dataUser = {
      email: 'test@test.com',
      hashPassword: bcryptjs.hashSync('123456', 10)
    }

    sinon.stub(Sequelize.Model, 'findOne').resolves(dataUser);
    sinon.stub(bcryptjs, 'compareSync').returns(true);

    const token = await UserService.Login(body);

    expect(token).to.be.an('object');
    expect(token).to.have.property('token');
  });
});

describe('Testes unitários do arquivo UserService/Registrer', () => {
  afterEach(() => {
    sinon.restore();
  });

  
  it('Deve retornar um erro caso o usuário já esteja cadastrado', async () => {
    const body = {
      name: " ",
      lastName: " ",
      email: 'test@test.com',
      password: '123456'
    };

    sinon.stub(Sequelize.Model, 'findOne').resolves(body);

    expect(await UserService.Register(body).catch((err) => err.message)).to.be.equal('409|User already registered');
  });

  it('Deve retorna os dados do usuário cadastrado com sucesso. O objeto de resposta não deve conter a propriedade hashPassoword',async () => {
    const body = {
      name: " ",
      lastName: " ",
      email: "test2@test.com",
      password: "123456"
    };

    sinon.stub(Sequelize.Model, 'findOne').resolves(null);
    sinon.stub(Sequelize.Model, 'create').resolves(body);


    expect(await UserService.Register(body)).to.be.an('object');
    expect(await UserService.Register(body)).to.have.property('message');
  });
});