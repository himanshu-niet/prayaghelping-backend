const mongoose =require("mongoose")

const volunteerSchema = new mongoose.Schema({
  name:String,
  email:String,
  phone:String,
  dob:String,
  gender:String,
  idCard:String,
  photo:String,
  state:String,
  district:String,
  address:String,
  position:String,
  date:String,
  vId:String,
});
const VolunteerModel=mongoose.model("Volunteer", volunteerSchema);
module.exports =VolunteerModel
