
const admin = require("./firebaseDB/db");
const {VolunteerPDF}=require('./model/pdfGen')
const firestore = admin.firestore();
const bucket = admin
  .storage()
  .bucket("gs://prayaghelpingfoundation-35c04.appspot.com");
const VolunteerModel=require("./model/VolunteerModel");
const { StatusCodes } = require("http-status-codes/build/cjs/status-codes");





const addVolunteerRef = async(data) => { 
    try {
      
      
      const check = await firestore.collection("volunteer").doc(data.email).get();
      
      if (check.exists){
        return { message: "Email Already Registered", code: StatusCodes.NOT_ACCEPTABLE };
      }

       await firestore.collection("volunteer").doc(data.email).set(data);
        //VolunteerPDF(data.vId,data.name,data.dob,data.mob,data.position,data.address);

        return { message: "Record saved successfully", code: StatusCodes.OK };


    } catch (error) {
        return { message: error.message,code:StatusCodes.BAD_REQUEST };
    }
};



const getVolunteerRef = async () => {
   try {
     const data = await firestore.collection("volunteer").get();
     const volunteersArray = [];
     if (data.empty) {
       return({data:"No Record Found",code:StatusCodes.OK})
     } else {

       data.forEach((doc) => {
         const volunteerModel = new VolunteerModel(
           doc.id,
           doc.data().name,
           doc.data().email,
           doc.data().phone,
           doc.data().dob,
           doc.data().gender,
           doc.data().idCard,
           doc.data().photo,
           doc.data().state,
           doc.data().district,
           doc.data().address,
           doc.data().position,
           doc.data().date,
           doc.data().vId
         );
         volunteersArray.push(volunteerModel);
       });

       return { data: volunteersArray ,code:StatusCodes.OK};
     }
   } catch (error) {
     return { data: error.message, code: StatusCodes.BAD_REQUEST };
   }
};


const getDate = () => {

  let id = Date.now().toString();
  let date_ob = new Date();
  let day = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  const date = day + "/" + month + "/" + year;
  return { date, id };
};


const uploadPhoto = async (filename) => {
const file = bucket.file(filename);
try {
   const metadata=await file.getMetadata();
 const url=await metadata[0].mediaLink;
 return url;
} catch (error) {
  console.log(error.message)
}
}


const addContactRef = async (data) => {
  try {
    await firestore.collection("contact").doc().set(data);
    return { message: "Record saved successfuly", code: StatusCodes.OK };
  } catch (error) {
    return { message: error.message, code: StatusCodes.BAD_REQUEST };
  }
};




module.exports = {
  getDate,
  addVolunteerRef,
  getVolunteerRef,
  uploadPhoto,
  addContactRef,
};
