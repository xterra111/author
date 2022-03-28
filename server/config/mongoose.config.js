const mongoose = require("mongoose");

mongoose
	.connect("mongodb://127.0.0.1:27017/authordb", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		console.log("DB Connection has been established. Avengers Assemble")
	)
	.catch((err) => console.log("DB connection is not established"));
