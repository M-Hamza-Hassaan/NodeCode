// NODE.JS EVENTS 
// PART 16

// var fs = require('fs');
// var rs = fs.createReadStream('./myNewFile1.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });


//Part 17
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var myEvent = () => {
// console.log('I hear a scream!');
// }
// eventEmitter.on('scream', myEvent);
// eventEmitter.emit('scream')

//Part 18
var events = require('events');
var chatScene = new events.EventEmitter();

chatScene.on('Entered Here', (username) => {
    console.log('Hey, welcome' + username);
})

chatScene.on('Left Chat', (username) => {
    console.log(username + 'has left!');
})

chatScene.emit('Entered Here' , 'JJ');
chatScene.emit('Left Chat' , 'LL');