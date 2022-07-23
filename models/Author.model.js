const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Add the name of the author']
  },
  lastName: {
    type: String,
    required: [true, 'Add the last name of the author']
  },
  birthDate: {
    type: String,
    required: [true, 'Add the birth date of the author']
  },
  biography: {
    type: String
  },
  country: {
    type: String
  },
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author