// Event Emitter with extension

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function UserList () {
	this.list = [];
	EventEmitter.call(this);
}

util.inherits(UserList, EventEmitter);

UserList.prototype.add = function (name) {
	this.list.push(name);
	this.emit('new-user', name);
}

var list = new UserList();

list.on('new-user', function (name) {
	console.log('hello, ', name);
});

list.add('Shawn');
list.add('Gus');