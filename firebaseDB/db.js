
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://prayaghelpingfoundation-35c04-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket:"gs://prayaghelpingfoundation-35c04.appspot.com"
});

module.exports = admin;
