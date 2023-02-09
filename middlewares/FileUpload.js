const multer = require("multer");

 


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/images`);
  },
  filename: function (req, file, cb) {

     let extArray = file.mimetype.split("/");
     let extension = extArray[extArray.length - 1];

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = uniqueSuffix+"."+extension;
    req.body["" + file.fieldname] ="images/"+file.fieldname+"-"+filename;

    cb(null, file.fieldname + "-" + filename);
  },
});

const upload = multer({ storage: storage });






module.exports = { upload};