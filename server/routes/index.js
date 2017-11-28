const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', function(req, res, next) {
  res.status(200).sendFile('/dist/index.html');
});

router.get('/', function(req, res, next) {
  res.status(200).sendFile('/dist/index.html');
});

router.get('/cmc', function(req, res, next) {
  let collection = db.db.collection('coin_market_cap');
  collection.find().limit(100).sort({rank: -1, last_updated: -1}).toArray(function(err, results) {
    if (err) res.json(err);
    else res.send(results);
  });
});

module.exports = router;
