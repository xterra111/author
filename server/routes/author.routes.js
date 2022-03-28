const authorController = require("../controllers/author.controller");

module.exports = (app) => {
	app.get("/api/allauthors", authorController.findAllAuthors);
	app.get("/api/oneauthor/:id", authorController.oneAuthorDetail);
	app.post("/api/authors", authorController.createAuthor);
	app.put("/api/editauthor/:id", authorController.updateAuthor);
	app.delete("/api/deleteauthor/:id", authorController.deleteAuthor);
};
