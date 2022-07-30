const booksController = require("../../controllers/books.controller");
const router = require("express").Router();

// BOOKS
router.get("/books/new", booksController.create);
router.post("/books", booksController.doCreate);

router.get("/books", booksController.list);
router.get("/books/:id", booksController.bookDetail);

module.exports = router;
