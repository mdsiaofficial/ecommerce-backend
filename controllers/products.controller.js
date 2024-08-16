const Products = require("../models/products.model.js");

module.exports = {

  fetchProducts: async (req, res) => {
    const products = await Products.find();
    res.status(200).json({ message: "Products", products: products });
  },

  createProducts: async (req, res) => {
    const { name, description, price, stockQuantity, category } = req.body;
    console.log(name, description);
    
    const newProduct = await Products.create({
      name, description, price, stockQuantity, category
    });
    console.log(newProduct);
    
    res.status(201).json({ message: "Product created successfully", product: newProduct });
  },

  fetchProduct: async (req, res) => {
    const {id} = req.params;
    const product = await Products.findById(id);
    res.status(200).json({ message: "Product", product: product });
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stockQuantity, category } = req.body;
    const newProduct = await Products.findByIdAndUpdate(id, {
      name, description, price, stockQuantity, category
    });
    res.status(200).json({ message: "Product", product: newProduct });
  }
}
