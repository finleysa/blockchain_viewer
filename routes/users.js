const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const fs = require('fs');
const config = require('../config/database');

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
      res.json({
        success: false,
        msg: err
      })
    } else {
      res.json({
        success: true,
        msg: 'Registered user'
      })
    }
  })
});

router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (!user) return res.json({
      success: false,
      msg: "User not found"
    })
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) return res.json({
        success: false,
        msg: "Invalid login"
      });

      if (isMatch) {
        const token = jwt.sign({
          data: user
        }, config.secret, {
          expiresIn: 60 * 60 * 2400, // 24hrs
        })

        return res.json({
          success: true,
          token: 'JWT ' + token,
          username: user.username,
          id: user._id
        });
      }

      return res.json({
        success: false,
        token: 'Incorrect password'
      });

    });
  });
});

router.get('/profile', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  console.log(req);

  res.json({
    user: req.user
  });
});

module.exports = router;
