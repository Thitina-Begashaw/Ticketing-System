import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from "cors";
import ticketRoute from "./Routes/ticketRoute.js";
dotenv.config()

const app = express();
app.use(express.json())
app.use(cors())
app.use("/api/ticket" , ticketRoute);
mongoose.connect(process.env.MONGO_URI).then(
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  ).catch(err=>
    console.error("Failed to Connect" ,err));
  