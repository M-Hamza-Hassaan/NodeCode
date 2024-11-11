// PART 10

// var http = require ('http');
// var fs = require('fs');

// http.createServer(function(req, res){
//     fs.open('myNewFile1.txt', 'r',function(err, fileDescriptor){
//         if(err){
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.write('Internal Server Error: File could not be opened.');
//             return res.end();
//         }
//         res.writeHead(200, {'Content-Type' : 'text/html'});
//         res.write("The file has been opened successfully.");
//         res.end();
//     })
//     fs.appendFile('myNewFile1.txt' , 'Hello Guyz, Chai pi lo' , function(err){
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

//PART 11

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
//     fs.appendFile('myNewFile1.txt' , ' THE NEW TEXT' , function(err){
//         if(err){
//             res.writeHead(500, {'Content-type': 'text/html'});
//             res.write("Error Bro");
//             return res.end();
//         }
//         res.writeHead(200, {'Content-type': 'text/html'});
//             res.write("Ho gea Bro");
//             return res.end();
//     })
// }).listen(8080, function(){console.log('Server is live on local port 8080')});


//PART 12
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
//     fs.unlink('myNewFile1.txt' , function(err){
//         if(err){
//             res.writeHead(500, {'Content-type': 'text/html'});
//             res.write("Error Bro");
//             return res.end();
//     }})
// }).listen(8080, function(){console.log('Server py dekh byy')});



