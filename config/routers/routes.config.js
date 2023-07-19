const router = require("express").Router();
const miscController = require("../../controllers/misc.controller");
const authController = require("../../controllers/auth.controller");
const usersController = require("../../controllers/users.controller");
const authorsController = require("../../controllers/authors.controller");
const likesController = require("../../controllers/likes.controller");
const authMiddlewares = require("../../middlewares/authMiddleware");
// MISC
router.get("/", miscController.home);

// AUTH
router.get("/register", authController.register);
router.post("/register", authController.doRegister);
router.get("/login", authMiddlewares.isNotAuthenticated, authController.login);
router.post("/login", authController.doLogin);
router.get("/logout", authController.logout);

// USERS
router.get(
  "/profile",
  authMiddlewares.isAuthenticated,
  usersController.profile
);

// AUTHORS
router.get(
  "/authors/new",
  authMiddlewares.isAuthenticated,
  authorsController.create
);

router.post(
  "/authors",
  authMiddlewares.isAuthenticated,
  authorsController.doCreate
);

router.get("/authors", authorsController.list);
router.get("/authors/:id", authorsController.authorDetail);
router.get("/authors/:id/edit", authorsController.edit);
router.post("/authors/:id", authorsController.doEdit);
router.post("/authors/:id/delete", authorsController.delete);

//LIKES

router.post("/likes/:userId/:bookId", likesController.create);

module.exports = router;
