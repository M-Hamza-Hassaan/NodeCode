//PART-1
// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

//PART-2
// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

//PART-3
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);
////write this in google search => http://localhost:8080/summer

//PART-4
// var http = require('http');
// var url = require('url');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);
////write this in google search => http://localhost:8080/?year=2017&month=July


//PART-5
// var http = require('http');
// var url = require('url');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse("http://localhost:8080/?year=2023&month=Octuber", true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);

//PART-6
//Most Important part! Going to read an html file in server.
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('Dummy1.html', function(err, data) {
//   // fs.readFile('Dummy2.html', function(err, data) { //for getting error.
//     if (err) {
//       // Handle the error properly
//       res.writeHead(500, {'Content-Type': 'text/plain'}); //dont be confuse by 500, ill explain it later
//       res.write("There was an error reading the file.");
//       return res.end();
//     }    
//     // If no error, write the content of the file
//     else{res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();}
//   });
// }).listen(8080, function() {
//   console.log("Server is listening on port 8080");
// });
