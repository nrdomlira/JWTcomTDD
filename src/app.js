const express = require('express');

class AppController {
    constructor() {
        this.express = express();

        this.middleware();
        this.routes();
    }

    middleware() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(express.Router());
    }
}

module.exports = new AppController().express;