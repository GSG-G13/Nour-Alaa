/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const express = require('express');
const { clientError, serverError } = require('../controlers/errors/error');

const deleter = require('./middleware/deletmeddil');
const {
  getAllData,
  postProduct,
} = require('./middleware');

const router = express.Router();
router.get('/all', getAllData);
router.post('/add', postProduct);

router.delete('/delete/:id', deleter);

router.use(clientError);
router.use(serverError);
module.exports = router;
