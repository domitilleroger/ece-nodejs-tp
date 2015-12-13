// Import a module
var http = require('http');
// Import a file
var users = require('./users.js');

// Declare an http server
http.createServer(function (req, res) {
	var path = req.url.split("/").splice(1,2);
	res.writeHead(200, {content : 'application/json'});

	if(path[0] == "get"){
		users.get(path[1], function(user){
			var response = {
				info : 'You have searched the user :\n',
				user : user
			}
			res.writeHead(200, {content: 'application/json'});
			res.end(response.info + JSON.stringify(response.user));
		})
	}
	else if (path[0] == "save"){
		users.save(path[1], function(user){
			var response = {
				info : 'You have saved the user :\n',
				user : user
			}
			res.writeHead(200, {content: 'application/json'});
			res.end(response.info + JSON.stringify(response.user));
		})
	}

	else {
		res.writeHead(404,  {content : 'text/plain'});
		res.end("You've entered a wrong url !")
	}
}).listen(1337, '127.0.0.1'); // Start the server
