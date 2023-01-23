class VolunteerModel {
  constructor(
    id,
    name,
    email,
    phone,
    dob,
    gender,
    idCard,
    photo,
    state,
    district,
    address,
    position,
    date,
    vId
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.dob = dob;
    this.gender = gender;
    this.idCard = idCard;
    this.photo = photo;
    this.state = state;
    this.district = district;
    this.address = address;
    this.position = position;
    this.date=date,
     this.vId=vId;
  }
}

module.exports = VolunteerModel;
