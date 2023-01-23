const express = require("express");
const router = express.Router();
const { upload } = require("../firebaseDB/FileUpload");

const {
  addVolunteer,
  addContact,
} = require("../controller/user");

router.post(
  "/volunteer",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "idCard", maxCount: 1 },
  ]),
  addVolunteer
);

router.post("/contact", addContact);
module.exports = router;
