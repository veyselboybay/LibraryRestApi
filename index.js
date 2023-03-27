const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB Connected to MOngoDB");
  })
  .catch((err) => {
    if (err) {
      return err;
    }
  });

// Start the application
app.listen(3000, () => {
  console.log("Server started listening on port 3000");
});
