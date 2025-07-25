const express = require("express");

const dotenv = require("dotenv");
const MongoClient = require("mongodb").MongoClient;

dotenv.config();

const app = express();

const port = 5000;
//process.env  //is a global object we can acces evry veryable
dotenv.config();

MongoClient.connect(process.env.MONGO_URl)
  .then(() => console.log("mongodb connected succesfully"))
  .catch((err) => console.log("error", err));
app.listen(port, () => {
  console.log("server started and rnning at port 5000");
});
