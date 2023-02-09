const express = require("express");
const router = express.Router();
const { upload}=require("../middlewares/FileUpload")

const { addVolunteer, addContact, getAllBlogs } = require("../controller/user");

router.post(
  "/volunteer",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "idCard", maxCount: 1 },
  ]),
  addVolunteer
);

router.post("/contact", addContact);

router.get("/blogs", getAllBlogs);

module.exports = router;
