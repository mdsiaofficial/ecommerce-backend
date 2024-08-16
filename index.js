// all imports/requires
const express = require("express");
const mongoose = require("mongoose");
const { fetchProducts, createProducts, fetchProduct, updateProduct } = require("./controllers/products.controller");
const productsRouter = require("./routes/products.routes");
require("dotenv").config();

// 
const app = express();


// app - use
app.use(express.json());

// first route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Home" });
});

app.use("/products", productsRouter);

// database + server
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`Application Connected to database.`);

    // server
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port: 3000`);
    });
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
