const hbs = require("hbs");

hbs.registerHelper("userLikedBook", function (options) {
  const { book, likes } = options.hash;
  if (book && likes && likes.some((like) => like.book == book.id)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
