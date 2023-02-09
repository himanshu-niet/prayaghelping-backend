const {
  getVolunteerRef,
  getContactRef,
  addBlogRef,
} = require("../collections/adminCollection");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");


const getAllVolunteer=async (req,res)=>{
  try {
      const data = await getVolunteerRef();
      res.status(data.code).json({ message: data.data });
    
  } catch (error) {
    res.status(401).json({message:"Technical Error"})
  } 

}

const getAllContact = async (req, res) => {
  try {
    const data = await getContactRef();
    res.status(data.code).json({ message: data.data });
  } catch (error) {
    res.status(401).json({ message: "Technical Error" });
  }
};

const login=async(req,res)=>{
  try {
   
    var {email, password } = req.body;

  
    if (!email, !password) {
      return res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json({ message: "Request Body Error" });
    }

   
   const token = jwt.sign(
     {email: email},
     process.env.JWT_SECRET,
     {
       expiresIn: "30d",
     }
   );  
   
   return res
     .status(StatusCodes.OK)
     .json({ message: token });
 
   } 

   catch (error) {
     res
      .status(StatusCodes.SERVICE_UNAVAILABLE)
      .json({ message: "Technical Error" });
  }
}


const addBlog = async (req, res) => {
  try {
    const {
      title,
      description,
      blogDate,
      blogPhoto,

    } = req.body;
    const blogPhotoUrl = blogPhoto;
  
    if (
      (!title,
      !description,
      !blogDate,
      !blogPhoto)
    ) {
      return res.json({ message: "Bad Request" });
    }
    const store = {
      title,
      description,
      blogDate,
      blogPhotoUrl,

    };

    addBlogRef(store).then((data) => {
      res.status(data.code).json({ message: data.message });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




module.exports = {
  getAllVolunteer,
  login,
  addBlog,
  getAllContact,
};