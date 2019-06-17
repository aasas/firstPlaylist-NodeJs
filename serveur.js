var http=require('http');
var fs = require('fs');
var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.write("Hello World\n")
	response.end();
}));
// server.listen(7000);

var server2 = http.createServer();

server2.on('request', function (req, res) {

	fs.createReadStream('serveur.js').pipe(res);

});

server2.listen(3000);