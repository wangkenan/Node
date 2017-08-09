var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login' , function(req,res,next){
    var list = [1, 2, 4, 5, 5, 7, 8];
    res.render("user/login", {title : "我是NodeJs测试", list : list});
});
module.exports = router;
