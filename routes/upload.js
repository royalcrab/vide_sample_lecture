var express = require('express');
var multer  = require('multer');
var router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'mp4/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});

var upload = multer({ storage: storage });

router.post('/', upload.single('file'), function(req, res, next) {
    console.log(req.file);
    console.log(req.body);
    res.render('index', {_message: req.file.originalname + " のアップロードに成功しました", _title: "Simple Video Player"} );
    //res.send(req.file.originalname+'アップロードに成功しました。');
});

module.exports = router;
