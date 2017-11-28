const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../models/user');


router.post('/register', (req, res, next) => {
  console.log(req.body);

  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({success: false, msg: err})
    } else {
      res.json({success: true, msg: 'Registered user'})
    }
  })
});

router.post('/authenticate', (req, res, next) => {
  res.send("authenticate");
});

router.get('/profile', (req, res, next) => {
  res.send("profile");
});

module.exports = router;
