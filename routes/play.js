var express = require('express');
var router = express.Router();

var serverIndex = require('serve-index');
var path = require('path');

/* GET home page. */
router.use('/', serverIndex(
  path.join( __dirname, '../public/videos'),{
    icons: false
}));

router.get('/:file', function(req, res, next) {
  res.render('video', 
    { title: 'Video',
      _videoname: '/videos/' + req.params.file
    });
});

module.exports = router;
