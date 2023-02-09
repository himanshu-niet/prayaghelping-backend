"use strict";
const dotenv = require("dotenv");
dotenv.config();

const { PORT,  MONGO_URL } = process.env;



module.exports = {
  db_url:MONGO_URL,
  port: PORT,
};
