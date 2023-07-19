const booksController = require("../../controllers/books.controller");
const router = require("express").Router();
const authMiddlewares = require("../../middlewares/authMiddleware");

// BOOKS
router.get("/books/new", booksController.create);
router.post("/books", booksController.doCreate);

router.get("/books", authMiddlewares.isAuthenticated, booksController.list);
router.get("/books/:id", booksController.bookDetail);

module.exports = router;
