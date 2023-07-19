const Like = require("../models/Like.model");

module.exports.create = (req, res, next) => {
  const userId = req.params.userId;
  const bookId = req.params.bookId;

  Like.findOne({ user: userId, book: bookId })
    .then((like) => {
      if (like) {
        Like.findByIdAndDelete(like._id)
          .then(() => {
            res.send("DELETED");
          })
          .catch((e) => next(e));
      } else {
        const like = new Like({
          user: userId,
          book: bookId,
        });
        like
          .save()
          .then(() => {
            res.send("CREATED");
          })
          .catch((e) => next(e));
      }
    })
    .catch((e) => next(e));
};
