const {
  addVolunteerRef,
  addContactRef,
  getDate,
  getBlogsRef,
} = require("../collections/userCollection");



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

    const idCardUrl =idCard;
    const photoUrl =photo;

    
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
         
          return res.status(data.code).json({ message: data.message });   
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

const getAllBlogs = async (req, res) => {
  try {
    const data = await getBlogsRef();
    
    res.status(data.code).json({ message: data.data });
  } catch (error) {
    res.status(401).json({ message: "Technical Error" });
  }
};



module.exports = { addVolunteer, getAllBlogs, addContact };