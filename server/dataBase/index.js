const { getDataQuery } = require('./query');
const connection = require('./connection');
const Build = require('./config');

const {
  postproductQuery,
} = require('./query');

module.exports = {
  connection,
  getDataQuery,
  postproductQuery,
  Build,
};
