const { getDataQuery } = require('./query');
const connection = require('./connection');
const {
  postproductQuery,
} = require('./query');

module.exports = {
  connection,
  getDataQuery,
  postproductQuery,

};
