let connection = require("../connection");

module.exports = (username, message) => {
	return new Promise((resolve, reject) => {
		connection.query(
			`
				insert into messages(username,message) values(?,?)
			`,
			[username, message],
			(err, data) => {
				if (err) reject(err);
				else resolve(data);
			}
		);
	});
};
