const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config();


app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
app.use(cookieParser());
app.use(express.json());

const authRouter=require('./routes/auth')
const profileRouter=require('./routes/profile')
const requestRouter=require('./routes/request');
const userRouter = require("./routes/user");

app.use('/',authRouter)
app.use('/',profileRouter)
app.use('/',requestRouter)
app.use('/',userRouter)

connectDB()
  .then(() => {
    console.log("Database connected succesfully!");
    app.listen(process.env.PORT, () => {
      console.log("Server is listening on port:5000");
    });
  })
  .catch((err) => {
    console.error("Database could not be connected");
  });
