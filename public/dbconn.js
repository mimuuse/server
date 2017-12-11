var mysql = require('mysql');
var connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : '',
database : 'simpledata'
});
connection.connect(function(err) {
if (err) throw err;
console.log("Connected to the Server Successfully!");
});
module.exports = connection;
// connection.end();