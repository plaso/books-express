const mongoose = require('mongoose')
const Book = require('../models/Book.model')
const BOOKS = require('../data/books.json')
const Author = require('../models/Author.model')
const AUTHORS = require('../data/authors.json')

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
      console.log('📗 📖 Creating books...')
      createdBooks.forEach(book => console.log(`${book.title} was created`))

      return Author.create(AUTHORS)
    })
    .then((createdAuthors) => {
      console.log('--------------------------------------------------')
      console.log('🏄🏼 Creating authors...')
      createdAuthors.forEach(author => console.log(`${author.firstName} ${author.lastName} was created`))

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
