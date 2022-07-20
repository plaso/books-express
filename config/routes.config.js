const router = require('express').Router()
const miscController = require('../controllers/misc.controller')
const booksController = require('../controllers/books.controller')


// MISC
router.get('/', miscController.home)

// BOOKS

router.get('/books', booksController.list)
router.get('/books/:id', booksController.bookDetail)

module.exports = router