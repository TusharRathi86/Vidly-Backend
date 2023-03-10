const winston = require("winston");
const mongoose = require("mongoose");
require("dotenv").config();
// const config = require("config");

module.exports = () => {
  // const db = config.get("db");
  const db = process.env.MONGO_URL;
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => winston.info(`Connected to ${db}...`));
};
