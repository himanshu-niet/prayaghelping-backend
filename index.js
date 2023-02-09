const express=require("express")
const app=express()
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const admin=require("./router/adminRouter")
const user=require("./router/userRouter")

const connectDB = require("./db/connect");

connectDB(config.db_url);

app.use(cors());
app.use("/images",express.static("public/images"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use("/api/admin", admin);
app.use("/api",user)

app.listen(config.port)