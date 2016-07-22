var express = require('express');
var app = express();
var fs = require("fs");

var id = 2;

app.get('/getdatas', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/api/" + "default.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       // delete data["user" + 2];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8088, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})