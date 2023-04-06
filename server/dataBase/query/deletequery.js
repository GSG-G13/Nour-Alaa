const connection = require('../connection');

const deletquery = (id) => connection.query(`delete from products where id=${id}`);

module.exports = deletquery;
