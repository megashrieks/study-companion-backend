let express = require("express");
let app = express();
let bodyParser = require("body-parser");
const PORT = 8000;
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(require("./routes/"));
app.listen(PORT);
