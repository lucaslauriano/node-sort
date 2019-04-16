
const express = require('express')

const routes = express.Router()

const BubbleSortController = require('./controllers/bubblesort')

routes.post('/sort', BubbleSortController.post)

module.exports = routes