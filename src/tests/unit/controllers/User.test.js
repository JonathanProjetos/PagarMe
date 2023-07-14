const { expect } = require('chai');
const { describe, it } = require('mocha')
const sinon = require('sinon');
const { Login, Register } = require('../../../controllers/UserControllers');
const UserServices = require('../../../services/UserService');

describe('Testando a função do arquivo UserControllers/Login', () => {
  afterEach(() => {
    sinon.restore();
  });


  it('Deve chamar a função Login corretamente é retorna o token', async () => {
    const req = {
      body: {
        email: 'test@test.com',
        password: '123456',
      },
    }
  
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }

    sinon.stub(UserServices, 'Login').resolves({ token: 'token' });

    await Login(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith({ token: 'token' })).to.be.equal(true);
    expect(UserServices.Login.calledWith(req.body)).to.be.equal(true);
  });

});

describe('Testando a função do arquivo UserControllers/Register', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função corretamente com a mensagem User created successfully', async() => {
    const req = {
      body: {
        email: 'test@test.com',
        password: '123456',
      },
    }
  
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }
    
    sinon.stub(UserServices, 'Register').resolves({ message: 'User created successfully' });

    await Register(req, res);

    expect(res.status.calledWith(201)).to.be.equal(true);
    expect(res.json.calledWith({ message: 'User created successfully' })).to.be.equal(true);
    expect(UserServices.Register.calledWith(req.body)).to.be.equal(true);
  });
});