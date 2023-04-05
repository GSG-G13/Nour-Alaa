const connection = require('../connection');

const getData = () => connection.query('select * from products join catogery on products.catogery_id=catogery.id');
 getData().then(console.log);
module.exports = getData;
