const { getDataQuery } = require('../../dataBase');

const getAllData = (req, res) => {
  getDataQuery()
    .then((data) => res.json(data))
    .catch(console.log('Server Error'));
};

module.exports = getAllData;
