const { postproductQuery } = require('../../dataBase');

const postProduct = (req, res) => {
  postproductQuery(req.body)
    .then((data) => res.json(data.rows))
    .catch((e) => res.json({
      massage: 'server Error',
      error: e,
    }));
};

module.exports = postProduct;
