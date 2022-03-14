const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

class App {
  constructor() {
    this.express = express();
    this.server = require("http").Server(this.express);
    this.io = require("socket.io")(this.server, { cors: { origin: "*" } });
    this.middlewares();
    this.socket();
    this.routes();
  }

  middlewares() {
    mongoose.connect(process.env.MONGO_URL);
    this.express.use(morgan("dev"));
    this.express.use(cors());
    this.express.use(express.json());
  }

  socket() {
    const connectedUsers = {};
    this.io.on("connection", (socket) => {
      const { user } = socket.handshake.query;
      console.log(user, socket.id);
      connectedUsers[user] = socket.id;
    });
    this.express.use((req, res, next) => {
      req.io = this.io;
      req.connectedUsers = connectedUsers;
      return next();
    });
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().server;
