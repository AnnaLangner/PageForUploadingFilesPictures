var http = require('http');
var colors = require('colors');

function start() {
	function onRequest (request, response) {
		console.log('An inquiry was received.');
		response.writeHead(200, {"Content-type": "text/plain"});
		response.write('First cats for fences.');
		response.end();
	}

	http.createServer(onRequest).listen(9000);
	console.log('Server started!'.green);
}

exports.start = start; 