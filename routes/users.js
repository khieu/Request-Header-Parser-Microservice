var express = require('express');
var router = express.Router();
var externalip = require('external-ip');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.ip);
});

module.exports = router;
