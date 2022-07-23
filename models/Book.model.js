const mongoose = require('mongoose')

const GENRES = ['Drama', 'Horror', 'Thriller'] 

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: [true, 'An author is required']
  },
  description: {
    type: String,
    required: [true, 'Add a description for the book'],
    minLength: 16
  },
  genre: {
    type: String,
    required: [true, 'Genre is required'],
    enum: GENRES
  },
  year: {
    type: Number,
    required: [true, 'Add the year of the release of the book']
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/150'
  }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book