require('dotenv').config()


var POSTGRES_USER = process.env.POSTGRES_USER
var POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
var POSTGRES_DB = process.env.POSTGRES_DB
var DB_HOST = process.env.DB_HOST

var url_path = 'postgres://' 
              + POSTGRES_USER + ':' 
              + POSTGRES_PASSWORD + '@' 
              + DB_HOST + ':' + '5432' + '/' 
              + POSTGRES_DB

module.exports = {
  development: {
    url: 'postgres://postgres:abcd1234@127.0.0.1:5432/user_devdb',
    dialect: 'postgres',
  },
  test: {
    url: url_path,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
}

