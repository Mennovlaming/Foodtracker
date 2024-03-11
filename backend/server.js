require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const mealRoutes = require('./routes/meals')

// epxress app
const app = express()

const cors = require('cors');
app.use(cors());

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}) 

// routes
app.use('/api/meals', mealRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


