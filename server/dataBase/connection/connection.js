const { Pool } = require('pg');
require('dotenv').config();

let dbUrl = '';

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB_URL;
} else {
  dbUrl = process.env.DB_URL;
}

const options = {
  connectionString: dbUrl,
  ssl: false,
};

const connection = new Pool(options);

module.exports = connection;
