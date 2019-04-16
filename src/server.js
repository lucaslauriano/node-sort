const express = require('express')

class App {
    constructor() {
        this.express = express()
        this.views()
        this.routes()
    }

    views() {
        this.express.set('view engine', 'ejs')
        this.express.use(express.json())
    }

    routes() {
        this.express.use(require('./routes'))
    }
}

module.exports = new App().express