
var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var con = require('../public/dbconn');
// GET users listing.  Login Api 
router
// List All Users Api
.post('/', function(req, res, next) {
  console.log(req.body);
  let commentInfo = req.body; 
  var sql = "SELECT * FROM registration WHERE ID="+ commentInfo.stdId;
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
  var sql = "INSERT INTO comment(ID,name,date,phone,comment) VALUES ('" + userinfo.ID + "','" + userinfo.name + "','" + userinfo.date + "','" + userinfo.phone +"','" + userinfo.comment +"')";
  console.log(sql);
  con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
  res.status(200); 
  });
  })

  module.exports = router;
  
  