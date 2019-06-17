var stream = require('stream');

var a = 0;
var b = 1;

var rs = new stream.Readable();

rs._read = function () {

	if (b < 144) {
		setTimeout (function(){
			var c = a + b;

			a = b;
			b = c;

			rs.push(' ' +c+ '\n');
		}, 100);
	} else {
		this.push(null);
	}
},

//rs.pipe(process.stdout);

//process.stdout.on('error', process.exit);
	
module.exports = rs


//Readable Stream Properties and Methods

// isPaused()	Returns true if the state of  the readable stream is paused, otherwise false
// pause()	Pauses the readable stream
// pipe()	Turns the readable stream into the specified writable stream
// read()	Returns a specified part of the readable stream
// resume()	Resumes a paused stream
// setEncoding()	Sets the character encoding of the readable stream
// unpipe()	Stops turning a readable stream into a writable stream, caused by the pipe() method
// unshift()	Pushes some specified data back into the internal buffer
// wrap()	Helps reading streams made by older Node.js versions