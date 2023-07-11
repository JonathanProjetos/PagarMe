require('express-async-errors');
const express = require('express');
const app = express();
const UserRouter = require('./router/UserRouter');
const TransactionRouter = require('./router/TransactionRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc/swagger.json');

app.use(express.json());

app.use('/', UserRouter);
app.use('/', TransactionRouter);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, _req, res, _next) => {
  console.error(err);
  const[status, message] = err.message.split('|');
  res.status(Number(status)).json({ error: message });
})

module.exports = app;