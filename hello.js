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
//   var q = url.parse("http://localhost:8080/?year=2023&month=October", true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080, function() {
//   console.log("Server is listening on port 8080");
// });




//FILE SYSTEM 

//PART-6
//Most Important part! Going to read an html file in server.
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
// //   fs.readFile('Dummy1.html', function(err, data) {
//   fs.readFile('Dummy2.html', function(err, data) { //for getting error.
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



//PART-7
// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res){
//     fs.appendFile('myNewFile1.txt', 'haa!!! you like that...!', function(err){
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         if (err){
//           console.log("Server isn't working.");
//         };
//         res.end('The file has been updated successfully.');
//     })
// }).listen(8080, function(){
//     console.log('Server is listening on port 8080');
// });



//PART-8

// What i did, i just used readfile on newly created file, just for practice, must do that

// var http = require ('http');
// var fs = require('fs');

// http.createServer(function(req, res){
//     fs.readFile('myNewFile1.txt', function(err, data){
//         if(err){
//             res.writeHead(404, {'content-type': 'text/plain'});
//             res.write('File not found');
//             return res.end('Undone!!');
//         }
//         else{

//             res.writeHead(200, {'content-type': 'text/html'});
//             res.write(data);
//             res.end();
//         }
//     })
// }).listen(8080, function(){
//     console.log('Server is listening on port 8080');
// })



//PART-9
//without using any flag...just to see what happens
// The Already wriiten text was replaced by new text. This is Done by Using fs.open() method.
//Now that, we have found that the original file is not changed but i seems like there is something added to it.

// Basically this happens by using Flags:
// To avoid overwriting any content in the file, use the appropriate flag based on your requirements:
// 'r' for reading without changing the file.
// 'a' for appending new content without deleting existing content.
// 'w' for writing, which will clear any existing content.

// var http = require ('http');
// var fs = require('fs');

// http.createServer(function(req, res){
//     fs.open('myNewFile1.txt', 'w',function(err, fileDescriptor){
//         if(err){
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.write('Internal Server Error: File could not be opened.');
//             return res.end();
//         }
//         res.writeHead(200, {'Content-Type' : 'text/html'});
//         res.write("The file has been opened successfully.");
//         res.end();
//     })
// }).listen(8080, function(){console.log('Server is listening on port 8080')});