var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/no_connection_1', function(req, res, next) {
  res.render('No_Connection_1')
});

module.exports = router;
