const connection = require('../connection');

const getDataQuery = () => connection.query(`select p.*, catogery.catogery from products p
inner join catogery on p.catogery_id=catogery.id`);
module.exports = getDataQuery;
