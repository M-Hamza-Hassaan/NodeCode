//PART 13
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
    
//     fs.rename('myNewFile1.txt','Renamed.txt', (err) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/html' });
//             res.write("Error Bro");
//             return res.end();
//         }
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write("Ho gea Bro");
//         return res.end();
//     });
// }).listen(8080, function(){console.log('Server py dekhen sir')});

// NODE.JS URL MODULE

// PART 14
// var http = require('http');
// var url = require('url')
// var addr = 'https://github.com/Code-Damn-Hamza/NodeCode';
// var q = url.parse(addr, true);
// console.log(q.host); //returns 'github.com'
// console.log(q.pathname); //returns '/Code-Damn-Hamza'
// console.log(q.search); 

//PART 15
// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//     console.log(q);
//     var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080,function(){console.log("SERVER IS LIVE AT 8080.")});
