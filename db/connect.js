const mongoose = require("mongoose");
const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => {console.log("ok")})
    .catch((err) => {
      console.log(err.message)
      console.error("Database connection error");
    });
};
module.exports = connectDB;
