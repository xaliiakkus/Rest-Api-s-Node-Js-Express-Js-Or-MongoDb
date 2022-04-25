const {
  getProductsMongoose,
  createProductsMongoose,
  updateProductsMongoose,
  deleteProductsMongoose,
} = require("../model/products");

const getProducts = async(req, res)=>{
  let products = await getProductsMongoose();
  res.json(products) 
}

const createProducts = async (req, res) => {
  let product = {};
  product = req.body;
  let response = await createProductsMongoose(product);
  res.json(response);
};
const updateProducts = async (req, res) => {
  let product = {};
  product = req.body;

  let response = await updateProductsMongoose(product);
  res.json(response);
};
const deleteProducts = async (req, res) => {
  let ID = 1;

  ID = req.params.id;
  let response = await deleteProductsMongoose(ID);
  res.json(response);
};

module.exports = {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
};
