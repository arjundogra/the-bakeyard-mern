const bcrypt = require("bcryptjs");
const users = require("../models/users");

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
            .then(
              res.send("User Added")
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
    bcrypt.compare(password, user.password).then((r) => console.log(r));
    res.send(user)
  });
};
