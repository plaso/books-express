const router = require("express").Router();
const booksController = require("../controllers/books.controller");
const miscController = require("../controllers/misc.controller");
const authController = require("../controllers/auth.controller");
const usersController = require("../controllers/users.controller");
const authorsController = require("../controllers/authors.controller");

// MISC
router.get("/", miscController.home);

// AUTH
router.get("/register", authController.register);
router.get("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/login", authController.doLogin);
router.post("/register", authController.doRegister);

// USERS
router.get("/profile", usersController.profile);

// BOOKS
router.get("/books/new", booksController.create);
router.post("/books", booksController.doCreate);

router.get("/books", booksController.list);
router.get("/books/:id", booksController.bookDetail);

// AUTHORS
router.get("/authors/new", authorsController.create);
router.post("/authors", authorsController.doCreate);

router.get("/authors", authorsController.list);
router.get("/authors/:id", authorsController.authorDetail);

router.get("/authors/:id/edit", authorsController.edit);
router.post("/authors/:id", authorsController.doEdit);

router.post("/authors/:id/delete", authorsController.delete);

module.exports = router;
