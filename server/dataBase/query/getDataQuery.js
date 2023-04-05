const connection = require('../connection');

const getDataQuery = () => connection.query('select * from products join catogery on products.catogery_id=catogery.id');
module.exports = getDataQuery;
