let products = [];

const getProducts = async (req, res) => {
  res.json(products);
};

const createProducts = async (req, res) => {
  let product = {};
  product = req.body;
  products.push({ ...product });

  res.json(products);
};
const updateProducts = async (req, res) => {
  let product = {};
  product = req.body;

  products.map((prod, index) => {
    if (prod.id == product.id) {
      products[index] = { ...product };
    }
  });
  res.json(products);
};
const deleteProducts = async (req, res) => {
  let ID = 4;

  ID = req.params.id;
  products = products.filter((prod) => prod.id.toString() !== ID.toString());

  res.json(products);
};

module.exports = {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
};
