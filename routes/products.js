const express = require("express");

const router = express.Router();

const {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} = require("../controller/products");

router.get("/", getProducts);

router.post("/", createProducts);

router.put("/", updateProducts);

router.delete("/:id", deleteProducts);

module.exports = router;
