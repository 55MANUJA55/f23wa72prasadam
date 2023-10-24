var express = require('express');
var sum=0;
var more=1;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  more=more+1;
  sum=more+sum;
  res.send('Sum is:'+sum);
});

module.exports = router;
