var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var models = require('./models/models');
var routes = require('./routes/index');
var _ = require('lodash');
const cors = require("cors")

var app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

// view engine setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


module.exports = app;
