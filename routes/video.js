var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('video', 
    { title: 'Video',
      _videoname: '/videos/decode_20.mp4'
    });
});

module.exports = router;