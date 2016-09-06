var express = require('express');
var router = express.Router();
var nano = require('nano')('http://localhost:5984');
var my_db = nano.db.use('my_db');
var url = require('url');

router.get('/', function(req, res, next) {

});

router.get('/navs', function(req, res, next) {
    my_db.view('main_menu', 'navs', {}, function(err, body){
        if(!err){
            var rows = body.rows; //the rows returned
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(rows));

    });
});

router.get('/test', function(req, res, next) {
  var to_render = req.route.path.replace('/','');
  res.render(to_render, { My_test: 'My_test_title' });
});


/* GET home page. */


module.exports = router;
