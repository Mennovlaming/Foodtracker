const express = require('express');

const {
    createMeal,
    getMeal,
    getMeals,
    deleteMeal,
    updateMeal

} = require('../controllers/mealController');

const router = express.Router()

// GET all meals
router.get('/', getMeals)

// GET a meal
router.get('/:id', getMeal)

// POST a meal
router.post('/', createMeal)

// DELETE a meal
router.delete('/:id', deleteMeal)

// UPDATE a meal
router.patch('/:id', updateMeal)


module.exports = router;