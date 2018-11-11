let express = require("express");
let router = express.Router();

router.post("/register", (req, res) => {
	let { register } = require("../../database");
	let { username, password } = req.body;
	register(username, password)
		.then(_ => {
			let { createToken } = require("../../utils/token");
			res.json({
				error: null,
				token: createToken({
					username: username
				})
			});
		})
		.catch(_ => {
			res.json({
				error: "couldn't add user"
			});
		});
});

module.exports = router;
