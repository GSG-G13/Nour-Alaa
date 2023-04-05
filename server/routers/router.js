/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const express = require('express');

const getAllData = require('./middleware/getData');
// const { clientError, serverError } = require('../controlers/errors/error');

const router = express.Router();

// router.use(clientError);
// router.use(serverError);

router.get('/', getAllData);

module.exports = router;
