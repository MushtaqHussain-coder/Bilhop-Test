const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const routes = require('./routes');

var app = express();

app.use(cors());
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

module.exports = app;
