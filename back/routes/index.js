var express = require('express');
var router = express.Router();
var userModel = require('../models/users')

/* GET home page. */
router.get('/',async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
