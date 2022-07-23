const createError = require('http-errors')

// CRUD de author
const Author = require('../models/Author.model')


// READ
module.exports.list = (req, res, next) => {
  Author.find()
    .then(authors => {
      res.render('authors/list', { authors, author: { firstName: 'Pablo' } })
    })
    .catch(next)
}

module.exports.authorDetail = (req, res, next) => {
  const { id } = req.params

  Author.findById(id)
    .then(author => {
      res.render('authors/detail', { author })
    })
    .catch(err => {
      next(createError(404, 'Author not found'))
      // next(err) Esto es lo que hariamos por defecto
    })
}


// CREATE


// Renderizar el formulario de creación
module.exports.create = (req, res, next) => {
  res.render('authors/form')
}

// La creación
module.exports.doCreate = (req, res, next) => {
  // const { firstName, lastName } = req.body

  // const author = {
  //   firstName,
  //   lastName
  // }
  const data = {}

  Author.create(req.body)
    .then(createdAuthor => {
      console.log(createdAuthor)

      res.redirect('/authors')
    })
    .catch(err => next(err))
    // .catch(next) es lo mismo


  // ESTO ES LO MISMO QUE HACERLO CON EL CREATE
  // const author = new Author(req.body)

  // author.save()
    // .then blabla
}

// UPDATE

module.exports.edit = (req, res,next) => {
  const { id } = req.params

  Author.findById(id)
    .then(author => {
      res.render('authors/form', { author, isEdit: true })
    })
}

module.exports.doEdit = (req, res, next) => {
  const { id } = req.params
  Author.findByIdAndUpdate(id, req.body, { new: true }) // new true sirve para que te devuelva el nuevo en el then sino te devuelve el viejo
    .then(author => {
      console.log({author})

      res.redirect(`/authors/${author.id}`)
    })
}

// DELETE

module.exports.delete = (req, res, next) => {
  const { id } = req.params

  Author.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/authors')
    })
    .catch(next)
}