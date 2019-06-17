var fs = require('fs');

// fs.readFile('FileSystem.js', function (err, data){
// 	console.log(data.toString());
// });


// fs.writeFile('text.txt', 'this is the content', function (err, data){
// 	if (err) {throw err};

// 	console.log(fs.readFileSync('text.txt').toString());
// });

// var readStream = fs.createReadStream('FileSystem.js');

// readStream.pipe(process.stdout);

var writeStream = fs.createWriteStream('fib.txt');

var fib = require('./StreamReadable');

fib.pipe(writeStream);