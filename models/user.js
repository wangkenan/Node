var MyRequest = require('../conf/mysql.js');
var data = {};
function users(){

}
users.prototype.checkLogin = function(){

}
users.prototype.getUser = function(callback){
    var data = {};
    MyRequest
    .Select('xy_parents')
    .one()
    .then((user) => {
        MyRequest
        .Select('xy_student')
        .condition('sid' , user.id , '=')
        .get()
        .then((Test) =>{
            data.user = user;
            data.parents = Test;
            callback(data);
        })
    });
}
users.prototype.login = function(params,callback){
    
}
module.exports = users;
