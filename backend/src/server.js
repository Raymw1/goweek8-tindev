const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(morgan("dev"));
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
