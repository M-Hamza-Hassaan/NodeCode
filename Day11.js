// // Part 19
// var http = require('http')
// var os = require('os')
// // os.uptime: This function returns the number of seconds the system has been running since it was last rebooted. 
// const SystemUpTime = os.uptime();

// // os.userInfo
// const userInfo = os.userInfo();

// // otherInfos, that must be in objsct
// const otherInfos = {name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// // Just to check if they are working.
// // console.log(SystemUpTime);
// // console.log(userInfo);
// // console.log(otherInfos);

// // Creating Server
// const server = http.createServer((req, res)=>{
//     if (req.url === '/') {
//         // Respond with system information
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({
//             message: 'System Information',
//             SystemUpTime,
//             userInfo,
//             otherInfos
//         }));
//     } else {
//         // Handle invalid routes
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found');
//     }
// });
// server.listen(8080, ()=>{
//     console.log('Server is running on port 8080');
// });

// PART 20
// Setting up Express application, by doing basic routing, also install "Nodemon" to auto restart the server.

// var  express = require('express');
// var app = express();

// app.get('/', (req, res) => {
//     res.send('Hello Dunya');
// })
// app.get('/profile', (req, res) =>{
//     res.send('Hello World');
// })

// app.listen(8080, ()=>{
//     console.log('Server is running on port 8080');
// })

// THIS WAS BASIC ROUTING IN EXPRESS
