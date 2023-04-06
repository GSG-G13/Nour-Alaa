/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
const connection = require('../connection');

const postproductQuery = ({ title, description, img, price, catogery_id }) => {
  const options = {
    text: 'INSERT INTO products (title, description, img, price, catogery_id) VALUES ($1, $2, $3, $4, $5) RETURNING title, description, img, price, catogery_id, id',
    values: [title, description, img, price, catogery_id],
  };
  return connection.query(options);
};

module.exports = {
  postproductQuery,
};
