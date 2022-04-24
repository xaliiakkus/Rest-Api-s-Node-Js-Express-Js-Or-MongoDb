const express = require("express");
var bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.use(cors());

var writelist = ["http://localhost,http://aliakkus.com"];

var corsOptions = {
  origin: function (origin, callback) {
    if (writelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  Credential: true,
};
app.use(cors(corsOptions));
let products = [];

app.get("/api/products", (req, res )=> {
  res.json(products);


app.post("/api/products", (req, res) => {
  let product = {};
  product = req.body;
  product.push({ ...product });

  res.json(products);
});

app.put("/api/products", (req, res )=> {
  let product = {};
  product = req.body;
  product.map((prod, index) => {
    if (prod.id == product.id) {
      products[index] = { ...product };
    }
  });
});
app.delete("/api/products", (req, res) => {
  let ID = 0;

  ID = req.params.id;
  products = products.filter((prod) => prod.id.toString() !== ID.toString());

  res.json(products);
});

app.get("/api/file/write",(req, res) =>{
  let content = " test file constent ";
  s.writeFile("/test.txt",content , (err) => {
    if(err){
  console.error(err);
    }else{
      res.json(" File written Successfully");
    }
  })
} )


app.get("/", (req, res) => {
  res.json("Hoşgeldiniz Express Js Ana Sayfasına");
});
app.listen(process.env.port || 5055);
console.log(" webServer listening at " + (process.env.port || 5055))})
