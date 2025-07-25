// starting letter file should  be cappital
const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  //name,email,phone ,city
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    default: false,
  },
  city: {
    type: String,
  },
});
// if we export then we use no export no use
module.exports = mongoose.model("Employee", employeeSchema);
