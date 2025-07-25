const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const employeeRoutes = require("./Routes/employeeRouter");
const carRoutes = require("./Routes/carRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

/*// client side
app.get("/mango", (req, res) => {
  res.json({ fruit: "mango" });
});

//server side rendering

app.get("/grapes", (req, res) => {
  res.send("<h1>this is grapes</h1>");
});
*/
//...
//  Connect and THEN start the server
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("onnected to MongoDB");

    app.use("/employees", employeeRoutes);
    app.use("/cars", carRoutes);
    // app.use((err, req, res, next) => {
    //   res.status(400).json({
    //     status: "fail",
    //     message: err.message,
    //   });
    // });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
