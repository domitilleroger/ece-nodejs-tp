var users = require('../lib/users.js');

describe('server', function () {
	it('save', function () {
		users.save('Username to test', function(user) {
			console.log("Save test" + user);
		});
	});
});