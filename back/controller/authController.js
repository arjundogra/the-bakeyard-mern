const bcrypt = require("bcryptjs");
const users = require("../models/users");
const config = require('../config/default.json')
const jwt = require('jsonwebtoken');

module.exports.signup = (req, res) => {
  console.log("POST SIGNUP", req.body)
  const { name, email, password } = req.body;
  console.log(name,email,password)
  users.findOne({ email }).then((user) => {
    if (user) {
      res.send("User already exists");
    }
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            const User = new users(req.body)
            User.password = hash
            User.save()
            .then(user=>{
              jwt.sign({userId: user._id},config.SecretKey,{ expiresIn: '1h' },(err,token)=>{
                res.json({token,user})
              })
              console.log(user._id)
            }
            )
        });
    });
  });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  users.findOne({ email }).then((user) => {
    if (!user) {
      res.send("User not existed");
    }
    bcrypt.compare(password, user.password)
    .then((r) => {
      if (r){
        jwt.sign({userId: user._id},config.SecretKey,{ expiresIn: '1h' },(err,token)=>{
          res.json({token,user})
        })
      }
      else{
        res.status(400).json({"msg":"Incorrect Password"})
      }
    });
  });
};

module.exports.getUser = (req, res) => {
  // res.send(req.user.userId)
  users.findOne({"_id": req.user.userId}).then((user) => {
    delete user.password;
    console.log(user)
    res.json({"name": user.name, "email":user.email})
  });
};