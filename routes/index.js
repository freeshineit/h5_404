var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/no_connection_1', function(req, res, next) {
  res.render('No_Connection_1')
});

router.get('/2_404_error', function(req, res, next) {
  res.render('2_404_Error')
});
router.get('/3_something_went_wrong', function(req, res, next) {
  res.render('3_something_went_wrong')
});

module.exports = router;
