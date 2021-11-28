const express = require('express')
const router = express.Router()

const Recipe = require('../models/recipe.model')() // note we need to call the model caching function

const CrudController = require('../controllers/crud')

const RecipeCrudController = new CrudController(Recipe)

// create a Recipe
router.post('/', RecipeCrudController.create)

// get all Recipe
router.get('/', RecipeCrudController.getAll)

// get a Recipe
router.get('/:id', RecipeCrudController.getOne)

// update a Recipe
router.put('/:id', RecipeCrudController.update)

// remove a Recipe
router.delete('/:id', RecipeCrudController.delete)

module.exports = router