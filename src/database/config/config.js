require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql"
  },
  test: {
    username: "",
    password: "",
    database: "",
    host: "",
    port: "",
    dialect: "mysql"
  },
  production: {
    username: "",
    password: "",
    database: "",
    host: "",
    port: "",
    dialect: "mysql"
  }
}
