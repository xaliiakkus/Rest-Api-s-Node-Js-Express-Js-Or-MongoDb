const mongoose = require("mongoose");

const connectMongoose = () => {
  mongoose.connect("mongodb://localhost:27017/expresstutorial", {
    useNewUrlParser: true,
  })
  .then(()=>console.log("connect to mongodb"))
  .catch(()=>console.log('connect to mongodb failed'))
};

module.exports ={ connectMongoose};