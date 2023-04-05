/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
const express = require('express');
const router = require('./routers/router');
const path = require('path');

const app = express();
app.set('PORT', process.env.PORT || 8080);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
