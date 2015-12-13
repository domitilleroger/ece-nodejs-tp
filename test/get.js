var users = require('../lib/users.js');

describe('server', function () {
	it('get', function () {
		users.get(3, function(user) {
			console.log("Get test " + user);
		});
	});
});