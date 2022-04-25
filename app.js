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

const productRouter =require("./routes/products");

app.use("/api/products",productRouter);



app.get("/", (req, res) => {
  res.json("Hoşgeldiniz Express Js Ana Sayfasına");
});
app.listen(process.env.port || 5055);
console.log(" Web Server Listelendirildi !! " + (process.env.port || 5055));
