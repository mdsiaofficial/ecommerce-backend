const express = require("express");
const { fetchProducts, createProducts, fetchProduct, updateProduct } = require("../controllers/products.controller")
const productsRouter = express.Router()


// define - [get]
router.get("/", fetchProducts)
router.get("/:id", fetchProduct)

// define - [post]
router.post("/", createProducts)

// define - [put]
router.put("/:id", updateProduct)



module.exports = productsRouter;