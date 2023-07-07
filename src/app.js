require('express-async-errors');
const express = require('express');
const app = express();
const UserRouter = require('./router/UserRouter');

app.use(express.json());

app.use('/', UserRouter);


app.use((err, _req, res, _next) => {
  const[status, message] = err.message.split('|');
  res.status(Number(status)).json({ error: message });
})


module.exports = app;