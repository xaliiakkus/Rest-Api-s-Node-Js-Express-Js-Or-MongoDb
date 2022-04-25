const mongoose = require("mongoose");

const { connectMongoose } = require("./db-connect");

let Schema = mongoose.Schema;
let productsSchema = new Schema({
  id: Number,
  name: String,
  price: String,
});
let ProductsModel = mongoose.model("products", productsSchema);

const getProductsMongoose = async () => {
  connectMongoose();

  let products = [];

  query = {};

  try {
    products = await ProductsModel.find(query, { _id: 0, _v: 0 });
  } catch (err) {
    products = [];
  }
  return products;
};
const createProductsMongoose = async (product) => {
  connectMongoose();
  let query = { id: product.id, name: product.name, price: product.price };
  let response = "";

  const doc = new ProductsModel(query);

  try {
    await doc.save();
    response = "Product InsertewithDirectives !";
  } catch (err) {
    console.log(err);
    response = "Product Insertion Failed";
  }
  return response;
};
const updateProductsMongoose = async (product) => {
  connectMongoose();

  const filter = { id: product.id };
  const update = { name: product.name, price: product.price };

  response = "";

  let doc = await ProductsModel.findOneAndUpdate(filter, update, {
    new: true,
    rawResult: true,
  });
  try {
    if (doc.lastErrorObject.updatedExisting == true) {
      response = " Update product record";
    } else {
      response = "Product Updation  Failed!!!";
    }
  } catch (err) {
    response = " Product Updation  Failed!!!";
  }
};

const deleteProductsMongoose = async (ID) => {
  connectMongoose();

  let query = { id: ID };

  let deletedRecord = await ProductsModel.deleteOne(query);

  if (deletedRecord.deletedCount && deletedRecord.deletedCount > 0) {
    response = "Delete Product Successful !!!";
  } else {
    response = "Delete Product Failed !!!";
  }
  return response;
};

module.exports = {
  getProductsMongoose,
  createProductsMongoose,
  updateProductsMongoose,
  deleteProductsMongoose,
};
