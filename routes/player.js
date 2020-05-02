var express = require('express');
var router = express.Router();
var path = require('path');
var serverIndex = require('serve-index');

router.use('/', serverIndex(
  path.join( __dirname, '../public/videos'),{
    icons: false
  }
));

/* GET home page. */
router.get('/:name', function(req, res, next) {
  res.render('index', { title: req.params.name });
});

module.exports = router;

