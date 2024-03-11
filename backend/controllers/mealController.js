const Meal = require ('../models/mealModel')
const mongoose = require('mongoose')

// get all meals
const getMeals = async (req, res) => {
    const meals = await Meal.find({})

    res.status(200).json(meals)
}

// get a single meal
const getMeal = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such meal'})
    }

    const meal = await Meal.findById(id)

    if (!meal) {
        return res.status(404).json({error: 'no such meal'})
    }

    res.status(200).json(meal)
}

// create new meal
const createMeal = async (req, res) => {
    const {title, kcal, protein} = req.body

    // add doc to db
    try {
        const meal = await Meal.create({title, kcal, protein})
        res.status(200).json(meal)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete meal
const deleteMeal = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such meal'})
    }

    const meal = await Meal.findOneAndDelete({ _id: id})

    if (!meal) {
        return res.status(404).json({error: 'no such meal'})
    }

    res.status(200).json(meal)
}

// update a meal
const updateMeal = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such meal'})
    }

    const meal = await Meal.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!meal) {
        return res.status(404).json({error: 'no such meal'})
    }

    res.status(200).json(meal)
}

module.exports = {
    getMeals,
    getMeal,
    createMeal,
    deleteMeal,
    updateMeal
}