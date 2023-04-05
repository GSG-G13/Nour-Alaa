const { getDataQuery } = require('../../dataBase');

const getAllData = (req, res) => {
  getDataQuery()
    .then((data) => res.json(data.rows))
    .catch((e) => res.json({
      massage: 'server Error',
      error: e,
    }));
};

module.exports = getAllData;
