const Author = require("../models/author.model");
const { update } = require("../models/author.model");

module.exports = {
	findAllAuthors: (request, response) => {
		Author.find(request.body)
			.collation({ locale: "en", strength: 2 })
			.sort({ authorname: 1 })
			.then((allAuthors) => {
				console.log(allAuthors);
				response.json(allAuthors);
			})
			.catch((err) => response.json(err));
	},
	createAuthor: (request, response) => {
		Author.create(request.body)
			.then((author) => {
				console.log(author);
				response.json(author);
			})
			.catch((err) => {
				console.log("Something wromg happened in Create");
				response.status(400).json(err);
			});
	},
	deleteAuthor: (request, response) => {
		Author.deleteOne({
			_id: request.params.id,
		})
			.then((result) => {
				response.json({ result });
			})
			.catch((err) => {
				response.json({
					message: "arghh you cannot DELETE this one matey",
					error: err,
				});
			});
	},
	updateAuthor: (request, response) => {
		Author.findByIdAndUpdate({ _id: request.params.id }, request.body, {
			new: true,
			runValidators: true,
		})
			.then((updateOneAuthor) => {
				response.json({
					updateOneAuthor,
				});
			})
			.catch((err) => {
				console.log("update for one Author did not work as expected");
				response.status(400).json(err);
			});
	},

	oneAuthorDetail: (request, response) => {
		Author.findById({ _id: request.params.id })
			.then((AuthorDetails) => {
				response.json(AuthorDetails);
			})
			.catch((err) => {
				console.log("Fetching AuthorDetail - Something went wrong");
				response.status(400).json(err);
			});
	},
};
