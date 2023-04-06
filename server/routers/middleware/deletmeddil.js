const deletquery = require('../../dataBase/query/deletequery');

const deleter = (req, res) => {
  const { id } = req.params;
  deletquery(id)
    .then(() => res.json('sucssec'))
    .catch((e) => res.json({
      status: 500,
      massage: `server Error ${e}`,
    }));
};
module.exports = deleter;
