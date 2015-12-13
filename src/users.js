module.exports = {
	
	save : function (name, callback){
		var user = {
			name: name,
			id: 5
		}
		callback(user);
	},

	get: function (id,callback){
		var index = null;
 
		var users = [
			{ name: "elbeze"	, id: 0 },
			{ name: "roger"		, id: 1 },
			{ name: "bruneau"	, id: 2 },
			{ name: "garcia"	, id: 3 },
			{ name: "godefroy"	, id: 4 }
		];
		for (var i = 0; i < users.length; i++) {			
			if (users[i]['id'] == id) {
				callback(users[i]);
			}
		}
	}
}