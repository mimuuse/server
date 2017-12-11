
var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var con = require('../public/dbconn');
// GET users listing.  Login Api 
router.get('/') 
.post('/', function(req, res, next) {
console.log(req.body);
let userinfo = req.body; // Get Userinfo Object
console.log(userinfo.username);
var sql = "SELECT * FROM users WHERE username ='"+userinfo.username+"' and password= '"+userinfo.password+"'";
console.log(sql);
con.query(sql, function (err, result, fields) {
if (err) throw err;
if (result.length) {
res.status(200).json(result);}
else {
res.status(404).json("fadlan kuceli markale");}
});})
// List All Users Api
.post('/allusers', function(req, res, next) {
  console.log(req.body);
  let userinfo = req.body; // Get Userinfo Object
  var sql = "SELECT * FROM attendance";
  console.log(sql);
  con.query(sql, function (err, result, fields) {
  if (err) throw err;
  if (result.length) {
  res.status(200).json(result);}
  else {
  res.status(404).json("fadlan kuceli markale");}
  });
  })
  
  

//Create User Api
.post('/create',function(req, res, next) {
  let userinfo = req.body; // Get Userinfo Object
  console.log(userinfo);
  //console.log(distributor.Name); 
  var sql = "INSERT INTO users(username,password,name,email) VALUES ('" + userinfo.username + "','" + userinfo.password + "','" + userinfo.name + "','" + userinfo.email +"')";
  console.log(sql);
  con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
  res.status(200); 
  });
  })
  
  //Update User Api
.post('update',function(req, res, next) {
  let userinfo = req.body; // Get Userinfo Object
  console.log(userinfo); 
  var sql = "UPDATE users"
  + " SET name=" +"'"+ userinfo.name +"'"
  + ", username=" +"'"+ userinfo.username +"'"
  + ", password=" +"'"+ userinfo.password +"'"
  + ", email=" +"'"+ userinfo.email +"'"
  + " WHERE user_id=" +userinfo.user_id;
  console.log(sql);
  con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
  res.status(200).res.json(result); 
  });});
  module.exports = router;
  
  