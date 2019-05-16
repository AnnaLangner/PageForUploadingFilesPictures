exports.upload = function (request, response) {
	console.log('I start handling the upload request.');
	response.write('I am starting upload!');
	response.end();
}

var fs = require('fs');

exports.welcome = function (request, response) {
	console.log('I starting handling the welcome request.');
	fs.readFile('templates/start.html', function (err, html) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		response.write(html);
		response.end();
	});
}

exports.error = function (request, response) {
	console.log('I do not know what to do!');
	response.write('404 :(');
	response.end();
}