// all imports/requires
const express = require("express");
const mongoose = require("mongoose");
const { fetchProducts, createProducts, fetchProduct, updateProduct } = require("./controllers/products.controller");
require("dotenv").config();

// 
const app = express();


// app - use
app.use(express.json());

// first route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Home" });
});

app.get("/products", fetchProducts);
app.post("/Products", createProducts);
app.get("/products/:id", fetchProduct);
app.put("/products/:id", updateProduct);

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
