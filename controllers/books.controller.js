const Book = require("../models/Book.model");
const Author = require("../models/Author.model");
const createError = require("http-errors");
const Like = require("../models/Like.model");

module.exports.list = (req, res, next) => {
  const { title } = req.query;

  const options = {};

  if (title) {
    options.title = title;
  }

  Book.find(options)
    .populate("author")
    .then((books) => {
      Like.find({ user: req.session.currentUser._id }).then((likes) => {
        res.render("books", { books, likes: likes, title: "hola" });
      });
    });
};

module.exports.bookDetail = (req, res, next) => {
  const { id } = req.params;

  Book.findById(id)
    .then((book) => {
      res.render("bookDetail", { book });
    })
    .catch((err) => {
      next(createError(404, "Book not found"));
      // next(err) Esto es lo que hariamos por defecto
    });
};

module.exports.create = (req, res, next) => {
  // pinta la vista de crear un libro
  Author.find().then((authors) => {
    res.render("books/form", { authors });
  });
};

module.exports.doCreate = (req, res, next) => {
  console.log(req.body);

  res.send("creado");
};
