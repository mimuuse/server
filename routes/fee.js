
var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var con = require('../public/dbconn');
// GET users listing.  Login Api 
router.get('/') 

// List All Users Api
.post('/', function(req, res, next) {
  console.log(req.body);
  let feeinfo = req.body; 
  var sql = "SELECT *FROM fee WHERE st_id="+ feeinfo.stdId;
  console.log(sql);
  con.query(sql, function (err, result, fields) {
  if (err) throw err;
  if (result.length) {
  res.status(200).json(result);}
  else {
  res.status(404).json("fadlan kuceli markale");}
  });
  })
  
  
  module.exports = router;
  
  