let express = require("express");
let router = express.Router();
router.post("/login", (req, res) => {
	let { login } = require("../../database/");
	let { username, password } = req.body;
	login(username, password)
		.then(rows => {
			if (!rows.length)
				res.json({
					error: "invalid username and password"
				});
			else {
				let { createToken } = require("../../utils/token");
				let token = createToken({
					username: username
				});
				res.json({
					error: null,
					token: token
				});
			}
		})
		.catch(err => {
			console.log(err);
		});
});
module.exports = router;
