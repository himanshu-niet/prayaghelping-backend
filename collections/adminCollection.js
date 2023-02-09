const VolunteerModel = require("../models/VolunteerModel");
const BlogModel = require("../models/BlogModel");
const ContactModel = require("../models/ContactModel");
const AdminModel = require("../models/AdminModel");


const { StatusCodes } = require("http-status-codes/build/cjs/status-codes");

const loginRef = async (data) => {
  try {
    const check = await AdminModel.find({email:data.email})

    if (check.exists) {
      return { message: "Record saved successfuly", code: StatusCodes.OK };
    }
    return {
      message: "Email Already Registered",
      code: StatusCodes.NOT_ACCEPTABLE,
    };
  } catch (error) {
    return { message: error.message, code: StatusCodes.BAD_REQUEST };
  }
};

const getVolunteerRef = async () => {
  try {
    const data = await VolunteerModel.find()
    
    if (data.empty) {
      return { data: "No Record Found", code: StatusCodes.OK };
    } else {

      return { data: data, code: StatusCodes.OK };
    }
  } catch (error) {
    return { data: error.message, code: StatusCodes.BAD_REQUEST };
  }
};


const getContactRef = async () => {
  try {
    const data = await ContactModel.find();

    if (data.empty) {
      return { data: "No Record Found", code: StatusCodes.OK };
    } else {
      return { data: data, code: StatusCodes.OK };
    }
  } catch (error) {
    return { data: error.message, code: StatusCodes.BAD_REQUEST };
  }
};

const addBlogRef = async (data) => {
  try {
    await new BlogModel(data).save()

    return { message: "Record saved successfuly", code: StatusCodes.OK };
  } catch (error) {
    return { message: error.message, code: StatusCodes.BAD_REQUEST };
  }
};

module.exports = {
  getVolunteerRef,
  addBlogRef,
  getContactRef,
};
