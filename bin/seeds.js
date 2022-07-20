const mongoose = require('mongoose')
const Book = require('../models/Book.model')
const BOOKS = require('../data/books.json')

// Conectarme a la base de datos

require('../config/db.config')

// Vaciarla

mongoose.connection.once('open', () => {
  mongoose.connection.db.dropDatabase()
    .then(() => {
      console.info('Db dropped')

      return Book.create(BOOKS)
    })
    .then(createdBooks => {
      createdBooks.forEach(book => console.log(`${book.title} was created`))

      // Cerrar la conexion
      return mongoose.connection.close()
    })
    .then(() => {
      console.log('Connection closed')

      process.exit(1)
    })
    .catch(err => {
      console.error(err)
      process.exit(0)
    })
})
