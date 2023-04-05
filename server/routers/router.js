/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const express = require('express');

// const getAllData = require('./middleware/getData');
// const postProduct = require('./middleware/postprouduct');
const {
  getAllData,
  postProduct,
} = require('./middleware');

const router = express.Router();

// router.use(clientError);
// router.use(serverError);

router.get('/', getAllData);

router.post('/add', postProduct);
module.exports = router;
