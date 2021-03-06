const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(3001, () =>
      console.log(`API disponível na porta 3001 `)
    );
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;