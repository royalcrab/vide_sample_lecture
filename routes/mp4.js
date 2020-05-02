var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */

router.get('/:name', function(req, res, next)
{
    var options = {
        root: path.join(__dirname, '../mp4/'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    var fileName = req.params.name;
    console.log( "File: " + fileName );
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status);
            res.end();
        } else {
            console.log('Sent:', fileName);
        }
    });
});

module.exports = router;
