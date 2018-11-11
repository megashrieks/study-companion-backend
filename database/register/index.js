let connection = require("../connection");
module.exports = (username, password) => {
	return new Promise((resolve, reject) => {
		connection.query(
			`
			insert into users values(?,?)
		`,
			[username, password],
			(err, data) => {
				if (err) reject(err);
				else resolve(data);
			}
		);
	});
};
