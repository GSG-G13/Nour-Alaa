/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const express = require('express');

const { clientError, serverError } = require('../controller/errors/error');

const router = express.Router();

router.use(clientError);
router.use(serverError);
