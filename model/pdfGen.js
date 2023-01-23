const fs = require("fs");
const PDFDocument = require("pdfkit");

const VolunteerPDF = (Vid,Vname,Vdob,Vmob,Vdesignation,Vadd) => {

var doc = new PDFDocument({
  size: [350, 230],
  margins: {
    // by default, all are 72
    top: 10,

    left: 10,
    right: 10,
  },
});
  const regNo = "RegNo:- 08/2022";
  const phn = "Office Mob:- 7525978743";
  const title = "Prayag Helping Foundation";

  const id = "Menber Id:- "+Vid;
  const name = "Full Name:- " + Vname;
  const dob = "DOB:- " + Vdob;
  const mob = "Mob:- " + Vmob;
  const designation = "Designation:- " + Vdesignation;
  const add = "Add :- " + Vadd;
  const office = "Office:- Naini Prayagraj, Uttar Pradesh";

  doc.font("Courier-Bold");
  doc.text(regNo, 10, 10);

  doc
    .text(phn, 10, 10, {
      align: "right",
    })
    .fontSize(18);

  doc.moveDown();
  doc.image("./images/logo.png", 10, 30, { fit: [50, 50] });

  doc.text(title, 70, 45).fontSize(12);

  doc.moveDown();
  doc
    .image("./images/him.jpeg", 10, 90, { width: 80, height: 110 })
    .rect(10, 90, 80, 110)
    .stroke();

  doc.moveDown();
  doc.text(id, 115, 80);
  doc.moveDown();
  doc.text(name, 115, 100);
  doc.moveDown();
  doc.text(dob, 115, 120);
  doc.moveDown();
  doc.text(mob, 115, 140);
  doc.moveDown();
  doc.text(designation, 115, 160);

  doc.moveDown();
  doc.text(add, 115, 180).fontSize(14);

  doc.moveDown(2);

  doc.text(office, 10, 210);

  doc.rect(0, 0, doc.page.width, doc.page.height);

  // end and display the document in the iframe to the right
  doc.end();
  doc.pipe(fs.createWriteStream("./output.pdf"));
console.log(add);

};


module.exports = { VolunteerPDF };