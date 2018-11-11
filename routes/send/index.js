let express = require("express");
let router = express.Router();

router.post("/send", (req, res) => {
	let { token, message } = req.body;
	let { decodeToken } = require("../../utils/token");
	decodeToken(token || "")
		.then(decoded => {
			let {
				data: { username }
			} = decoded;
			let { send } = require("../../database");
			send(username, message)
				.then(_ => {
					res.json({
						data: "message sent successfully"
					});
				})
				.catch(err => {
					res.json({
						error: "message couldn't be sent"
					});
				});
		})
		.catch(err => {
			res.json({
				error: "Sending failed"
			});
		});
});

module.exports = router;
