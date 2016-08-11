var PORT = 3000;

var http = require('http');
var url=require('url');
var fs=require('fs');
var mine=require('./mine').types;
var path=require('path');
// var redis = require("redis");

// var client = redis.createClient();
// client.on("error",function(err){
//     console.log("Error " + err);
// });
// client.set("index","hello world!",redis.print);
// client.hset("hash key", "hashtest 1", "some value", redis.print);
// client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
// // client.hkeys("hash key", function (err, replies) {
// //     console.log(replies.length + " replies:");
// //     replies.forEach(function (reply, i) {
// //         console.log("  " + i + ": " + reply);
// //     });
// client.hget("hash key","hashtest 1",redis.print);
// // client.quit();

var server = http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    var realPath = path.join("dist", pathname);
    //console.log(realPath);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");