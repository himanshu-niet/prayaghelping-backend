const {
  addVolunteerRef,
  getVolunteerRef,
  addContactRef,
  getDate,
  uploadPhoto,
} = require("../collection.js");




 const addVolunteer=async(req,res)=>{
  


    try {
      
    const {
      name,
      email,
      phone,
      dob,
      gender,
      state,
      district,
      address,
      idCard,
      photo,
    } = req.body;
    const idCardUrl = await uploadPhoto(idCard);
    const photoUrl = await uploadPhoto(photo);

    
    if (
      (!name,
      !email,
      !phone,
      !dob,
      !gender,
      !idCardUrl,
      !photoUrl,
      !state,
      !district,
      !address)
    ) {
      return res.json({ message: "Bad Request" });
    }
    
        const { date, id } = getDate();
        const vId = "PHF" + id;

        const store = {name,email,phone,dob,gender,state,district,address,position:"Member",date,vId,idCardUrl,photoUrl};
         addVolunteerRef(store).then((data) => {
            
           res.status(data.code).json({ message: data.message });   
         });
    } catch (error) {
        res.status(400).json({"message":error.message})   
    }  
}

 const addContact = async (req, res) => {
   try {

     const { name, email, phone, subject, msg } = req.body;

     if ((!name, !email, !phone, !subject, !msg)) {
       console.log(name);
       return res.json({ message: "Bad Request" });
     }
     const { date, id } = getDate();
     const store = {
      id,
       name,
       email,
       phone,
       subject,
       msg,
       date
     };
     addContactRef(store).then((data) => {
       res.status(data.code).json({ message: data.message });
     });
   } catch (error) {
     res.status(400).json({ message: error.message });
   }
 };



const getAllVolunteer = (req, res) => {
  try {
    getVolunteerRef().then((data) => {
     
      res.status(data.code).json(data.data);
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};








module.exports = { addVolunteer, getAllVolunteer, addContact };