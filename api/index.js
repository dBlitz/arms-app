

var express = require('express');
var api = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


api.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });

});



module.exports = api;

