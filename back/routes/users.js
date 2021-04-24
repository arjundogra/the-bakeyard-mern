var express = require('express');
var router = express.Router();
var authController = require('../controller/authController')
/* GET users listing. */
router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.get('/',(req,res)=>{
  res.send("get Req")
})
module.exports = router;
