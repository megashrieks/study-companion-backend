let connection = require("../connection");
module.exports = () => {
	return new Promise((resolve, reject) => {
		connection.query(
			"select * from messages order by sent",
			(err, data) => {
				if (err) reject(err);
				else resolve(data);
			}
		);
	});
};
