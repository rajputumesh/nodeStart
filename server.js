var express = require('express');
var app = express();
require('./connection');
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api',require('./route/Api').router);
var server = app.listen(3030, '192.168.1.11',function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})