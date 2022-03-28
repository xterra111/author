const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
	{
		authorname: {
			type: String,
			required: [true, "Author is required"],
			minlength: [3, "Author cannot be less than 3 characters"],
			maxlength: [30, "Author cannot be more than 30 characters"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Author", authorSchema);
