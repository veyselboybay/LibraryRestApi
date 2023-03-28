const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routes");
require("dotenv").config();

// Create an express app instance
const app = express();

// Accept JSON Object from body
app.use(express.json());

// Create endpoint connection
app.use("/api/v1", router);

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
