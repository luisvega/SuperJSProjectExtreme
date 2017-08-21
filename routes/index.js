var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: "hello world, I'm broken ¯\\_(ツ)_/¯"})
});

router.get('/epoch', function(req, res, next) {
  res.status(200).json({ message: Date.now() })
})

router.get('/meh', function(req, res, next) {
  res.status(200).json({ message: 'meh' })
})
module.exports = router;
