require('express-async-errors');
const express = require('express');

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc/swagger.json');
const UserRouter = require('./router/UserRouter');
const TransactionRouter = require('./router/TransactionRoute');
const PayableRouter = require('./router/PayableRoute');

app.use(express.json());

app.use('/', UserRouter);
app.use('/', TransactionRouter);
app.use('/', PayableRouter);

// endpoint para acessar a documentação da API
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// middleware para tratamento de erros.Todos os erros são lançados com o formato 'status|message'.
app.use((err, _req, res, _next) => {
  if (err.message.split('').includes('|')) {
    const [status, message] = err.message.split('|');
    res.status(Number(status)).json({ error: message });
  } else {
    console.error('Erro não Mapeado:', err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
