var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: "hello world"})
});

router.get('/epoch', function(req, res, next) {
  res.status(200).json({ message: Date.now() })
})
module.exports = router;
