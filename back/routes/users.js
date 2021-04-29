var express = require('express');
var router = express.Router();
var authController = require('../controller/authController')
var auth = require('../middleware/auth')

/* GET users listing. */
router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.get('/users',auth,authController.getUser);
module.exports = router;
