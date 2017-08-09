var mysql = require('mysql');
var DBconf = {
    host     : 'localhost',
    user     : 'root',
    password : 'ooyby',
    database : 'ooyby'

}
const  Database = (require('zar-mysql-master'))(DBconf);
module.exports = Database.request();
