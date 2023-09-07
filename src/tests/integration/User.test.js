const chai = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../app');
const { Sequelize } = require('../../database/models');
const { User } = require('../mocks/mockDataTransaction');
const { expect } = chai;

chai.use(chaiHttp);

describe('Testando o end-point /sing-in', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Testando o retorno em caso de requisição bem sucedida', async () => {
    const payload = {
      email: 'test@test.com',
      password: '123456'
    };

    sinon.stub(Sequelize.Model, 'findOne').resolves(() => User);

    await chai
      .request(app)
      .post('/sing-in')
      .send(payload);
    
    expect(User.name).to.exist;
    expect(User).to.be.a('object');
    expect(User).to.have.property('name');
  });
});
