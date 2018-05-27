
const express = require('express')
const router = express.Router()
// app.use(express.bodyParser());
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbname = "nodeDb"

router.get('/', (req, res) => {
  MongoClient.connect(url, function(err, db) {
  	var dbo = db.db("nodeDb");
    if (err) throw err; 
    dbo.collection("customers").find({}, function(err, res) {
      if (err) throw err;
      data = result
    });
  });
  res.render('index', {data: result});
})

router.get('/addaddress', (req, res) => {
  res.render('add_address')
})

router.post('/adddata', function(req, res){
	var obj = {};
	var result = {};
	var obj = JSON.stringify(req.body);
	MongoClient.connect(url, function(err, db) {
	  var dbo = db.db("nodeDb");
	  if (err) throw err; 
	  dbo.collection("customers").insertOne(obj, function(err, res) {
	    if (err) throw err;
	   result = {status : 200, messege:"Document inserted"};
	  });
	});
	res.send(result);
});

router.post('/removedata/:id', function(req, res){
	var obj = {};
	var result = {};
	var myquery = { mobile: id };
	MongoClient.connect(url, function(err, db) {
	  var dbo = db.db("nodeDb");
	  if (err) throw err; 
	  dbo.collection("customers").deleteOne(myquery, function(err, res) {
	    if (err) throw err;
	   result = {status : 200, messege:"Document removed"};
	  });
	});
	res.send(result);
});


module.exports = router
