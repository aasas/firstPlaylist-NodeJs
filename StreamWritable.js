var ws = new (require('stream').Writable)();

var fib = require('./StreamReadable');

ws._write = function (chunk, encoding, next) {
	console.log(chunk.toString());
	//next();
	setTimeout(next, 100);
};

fib.pipe(ws);


// Writable Stream Properties and Methods

// cork()	Stops the writable stream and all written data will be buffered in memory
// end()	Ends the writable stream
// setDefaultEncoding()	Sets the encoding for the writable stream
// uncork()	Flushes all data that has been buffered since the cork() method was called
// write()	Writes data to the stream