const express = require("express");
const router = express.Router();
const { upload }=require("../middlewares/FileUpload")
const authenticateToken = require("../middlewares/validateToken");

const {
  getAllVolunteer,
  login,
  addBlog,
  getAllContact,
} = require("../controller/admin");


router.get("/volunteers",  getAllVolunteer);
router.get("/contacts", getAllContact);


router.post("/login",  login);
router.post("/blog", authenticateToken, upload.single("blogPhoto"), addBlog);


module.exports = router;
