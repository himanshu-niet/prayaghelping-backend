const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  blogDate: String,
  blogPhotoUrl: String,
});
const BlogModel = mongoose.model("Blog", blogSchema);
module.exports = BlogModel;
