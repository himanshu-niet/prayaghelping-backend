const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: String,
  password: String
});
const AdminModel = mongoose.model("Admin", adminSchema);
module.exports = AdminModel;
