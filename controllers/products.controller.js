const Products = require("../models/products.model.js");

module.exports = {
  /**
   * Fetches all products from the database.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @return {Object} The product data in JSON format with a 200 status code.
   */
  fetchProducts: async (req, res) => {
    const products = await Products.find();
    res.status(200).json({ message: "Products", products: products });
  },
  /**
   * Creates a new product in the database.
   *
   * @param {Object} req - The request object containing the product details in the body.
   * @param {Object} res - The response object to send the product data back to the client.
   * @return {Object} The newly created product data in JSON format with a 201 status code.
   */
  createProducts: async (req, res) => {
    const { name, description, price, stockQuantity, category } = req.body;
    console.log(name, description);
    
    const newProduct = await Products.create({
      name, description, price, stockQuantity, category
    });
    console.log(newProduct);
    
    res.status(201).json({ message: "Product created successfully", product: newProduct });
  },

  /**
   * Fetches a product by its ID.
   *
   * @param {Object} req - The request object containing the product ID as a parameter.
   * @param {Object} res - The response object to send the product data back to the client.
   * @return {Object} The product data in JSON format with a 200 status code.
   */
  fetchProduct: async (req, res) => {
    const {id} = req.params;
    const product = await Products.findById(id);
    res.status(200).json({ message: "Product", product: product });
  },
/**
 * Updates a product in the database.
 *
 * @param {Object} req - The request object containing the product ID and updated details in the body.
 * @param {Object} res - The response object to send the updated product data back to the client.
 * @return {Promise<void>} The updated product data in JSON format with a 200 status code.
 */
  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stockQuantity, category } = req.body;
    const newProduct = await Products.findByIdAndUpdate(id, {
      name, description, price, stockQuantity, category
    });
    res.status(200).json({ message: "Product", product: newProduct });
  }
}
