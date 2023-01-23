"use strict";
const dotenv = require("dotenv");

dotenv.config();

const { PORT, firebaseConfig, STORAGE_URL } = process.env;



module.exports = {
  port: PORT,
  firebaseConfig: firebaseConfig,
  STORAGE_URL:STORAGE_URL
};
