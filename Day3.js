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

// What i did, i just used "readfile" on newly created file, just for practice, must do that

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



