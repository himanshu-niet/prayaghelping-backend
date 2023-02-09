const VolunteerModel=require("../models/VolunteerModel")
const BlogModel = require("../models/BlogModel");
const ContactModel = require("../models/ContactModel");


const { StatusCodes } = require("http-status-codes/build/cjs/status-codes");


const addVolunteerRef = async(data) => { 
    try {

     
      const check = await VolunteerModel.findOne({email:data.email});
    
      if (check){
      
        return { message: "Email Already Registered", code: StatusCodes.OK };

      }
        const volunteerModel =  new VolunteerModel(data);
        await volunteerModel.save();
        
        return { message: "Record saved successfuly", code: StatusCodes.CREATED };


    } catch (error) {
        return { message: error.message,code:StatusCodes.BAD_REQUEST };
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

const addContactRef = async (data) => {
  try {
    const store = new ContactModel(data);
    await store.save()
    return { message: "Record saved successfuly", code: StatusCodes.OK };
  } catch (error) {
    return { message: error.message, code: StatusCodes.BAD_REQUEST };
  }
};

const getBlogsRef = async () => {
  try {
    const data = await BlogModel.find();
    
    if (data.empty) {
      return { data: "No Record Found", code: StatusCodes.OK };
    } else {
     
      return { data:data, code: StatusCodes.OK };
    }
  } catch (error) {
    return { data: error.message, code: StatusCodes.BAD_REQUEST };
  }
};





module.exports = {
  getDate,
  addVolunteerRef,
  addContactRef,
  getBlogsRef,
};
