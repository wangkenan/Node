var express = require('express');
var router = express.Router();
var user = require('../models/user.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    var newUser = new user(); 
    newUser.getUser(function(data){
        res.json(data);
    });
});
router.get('/create_qrcode', function (req, res, next) {
        var text = req.query.text;
    try {
                var img = qr.image(text,{size :10,type:'png'});
                img.pipe(require('fs').createWriteStream(__dirname+'test.png'));
                console.log(__dirname);
                res.writeHead(200, {'Content-Type': 'image/png'});
                img.pipe(res);
            
    } catch (e) {
                res.writeHead(414, {'Content-Type': 'text/html'});
                res.end('<h1>414 Request-URI Too Large</h1>');
            
    }

});
module.exports = router;
