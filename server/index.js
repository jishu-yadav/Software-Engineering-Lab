import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = 8000;

const URL =
  "mongodb+srv://projectSE:jara123@se-lab.aa4vq.mongodb.net/eshop?retryWrites=true&w=majority";

mongoose
  .connect(URL)
  .then(() => {
    console.log("Database connected");
    return app.listen(PORT);
  })
  .then(() => {
    console.log(`server is successfully running on PORT ${PORT}`);
  })
  .catch(console.log);

// const express = require('express');
