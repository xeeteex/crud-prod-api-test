import express from "express";
import mongoose from "mongoose";

import productRoute from "./routes/product.route.js"

const app = express();


app.use(express.json()); // middleware

//routes
app.use('/api/products',productRoute)


app.listen(3000, () => {
  console.log("server is running  on 3000");
});

app.get("/", (req, res) => {
  res.send("hello form nodejs");
});


mongoose
  .connect(
    "mongodb+srv://admin:12345@backenddb.8dekce5.mongodb.net/crud_api?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
