const express = require('express')
var cors = require('cors');

class App {
    constructor() {
        this.express = express()
        this.views()
        this.routes()
    }

    views() {
        this.express.set('view engine', 'ejs')
        this.express.use(express.json())
        this.express.use(cors());
    }
    routes() {
        this.express.use(require('./routes'))
    }
}

module.exports = new App().express