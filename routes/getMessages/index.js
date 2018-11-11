let express = require("express");
let router = express.Router();

router.get("/messages", (req, res) => {
	let { getMessages } = require("../../database");
	getMessages()
		.then(rows => {
			res.json({
				error: null,
				data: rows
			});
		})
		.catch(_ => {
			res.json({
				error: "couldn't retrieve messages"
			});
		});
});

module.exports = router;
