const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).sendFile('/dist/index.html');
});

module.exports = router;
