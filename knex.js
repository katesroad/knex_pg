require('dotenv').config();

const knex = require('knex');

const config = {
  connection: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB
  },
  searchPath: ['public'],
  client: 'pg',
  pool: {min: 0, max: 7}
};

module.exports = knex(config);