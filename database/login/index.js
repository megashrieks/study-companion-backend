let connection = require("../connection");
module.exports = (username, password) => {
	return new Promise((resolve, reject) => {
		connection.query(
			"select * from users where username=? and password = ?",
			[username, password],
			(err, data) => {
				if (err) reject(err);
				else resolve(data);
			}
		);
	});
};
