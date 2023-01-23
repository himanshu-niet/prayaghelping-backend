const express=require("express")
const app=express()
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const upload = multer();
const config = require("./config");
const admin=require("./router/adminRouter")
const user=require("./router/userRouter")



app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use("/api",user)

app.listen(config.port,()=>console.log("server started "+config.port))