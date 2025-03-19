import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config()

const app = express();

mongoose.connect(process.env.MONGO_URI).then(
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  );