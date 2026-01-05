const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const UserRoutes = require("./routes/userRoutes");
app.use("/api/users", UserRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDb Connected");
    app.listen(5000, () => {
      console.log("Server is Running on Port 5000");
    });
  })
  .catch((err) => console.log(err));
