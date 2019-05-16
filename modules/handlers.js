exports.upload = function (request, response) {
	console.log('I start handling the upload request.');
	response.write('I am starting upload!');
	response.end();
}

exports.welcome = function (request, response) {
	console.log('I starting handling the welcome request.');
	response.write('Welcome to the start page');
	response.end();
}

exports.error = function (request, response) {
	console.log('I do not know what to do!');
	response.write('404 :(');
	response.end();
}