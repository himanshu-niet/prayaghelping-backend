const multer = require("multer");
const multerGoogleStorage=require("multer-google-storage")

var upload = multer({
  storage: multerGoogleStorage.storageEngine({
    autoRetry: true,
    bucket: "gs://prayaghelpingfoundation-35c04.appspot.com",
    projectId: "prayaghelpingfoundation-35c04",
    keyFilename: "./firebaseDB/serviceAccountKey.json",
    filename: (req, file, cb) => {
      const loc=file.fieldname;
      const fileName=Date.now()+"-"+file.originalname;
      const url = `${loc}/${fileName}`;
      req.body[''+loc]=url
      cb(null,'/'+url);
      
    },
  
  }),
});



module.exports = { upload };