let mysql = require("mysql");
let { username, password } = require("../secret");
let conn = mysql.createConnection({
	host: "localhost",
	user: username,
	password: password,
	database: "study_companion"
});
module.exports = conn;
