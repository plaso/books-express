const User = require("../models/User.model");
const mongoose = require("mongoose");

module.exports.register = (req, res, next) => {
  res.render("auth/register");
};

module.exports.doRegister = (req, res, next) => {
  const user = req.body;

  User.findOne({ email: user.email })
    .then((userFound) => {
      if (userFound) {
        res.render("auth/register", {
          user,
          errors: {
            emailExist: "Email already exist",
          },
        });
        return;
      } else {
        return User.create(user).then((userCreated) => {
          res.redirect("/profile");
        });
      }
    })
    .catch((err) => {
      console.log("errors", err);
      res.render("auth/register", {
        user,
        errors: err.errors,
      });
      next(err);
    });
};

// module.exports.logout = (req, res, next) => {
//   req.session.destroy();
//   res.redirect("/login");
// };

// module.exports.login = (req, res, next) => {
//   if (req.session.currentUser) {
//     res.redirect("/profile");
//   } else {
//     res.render("auth/login");
//   }
// };

// module.exports.doLogin = (req, res, next) => {
//   console.log("SESSION =====> ", req.session);

//   // req.body destructuring
//   const { email, password } = req.body;
//   // and email and password validation stay the same

//   User.findOne({ email })
//     .then((user) => {
//       if (!user) {
//         res.render("auth/login", {
//           errorMessage: "Email is not registered. Try with other email.",
//         });
//         return;
//       } else if (user) {
//         user.checkPassword(password).then((match) => {
//           if (match) {
//             req.session.currentUser = user;
//             res.redirect("/profile");
//           } else {
//             res.render("auth/login", { errorMessage: "Incorrect password." });
//           }
//         });
//       }
//     })
//     .catch((error) => next(error));
// };
