const Employee = require("../models/Employee");

// post
const createEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;

    const employee = new Employee({ name, email, phone, city });

    await employee.save();

    res.status(201).json(employee);
  } catch (err) {
    console.error(" Full error object:", err);
    res.status(500).json({ message: err.message });
  }
};

// get mathod in controller to get details

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.log("error", err);
    res.status(500).json({ message: "server eror" });
  }
};
// put mathod
const UpdateEmployee = async (req, res) => {
  try {
    const { name, email, city, phone } = req.body;

    const myeployee = await Employee.findByIdAndUpdate(req.params.id.trim(), {
      name,
      email,
      phone,
      city,
    });
    if (!myeployee) {
      return res.status(404).json({ message: "page not found" });
    }
    res.status(200).json(myeployee);
  } catch (err) {
    console.error("Update error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message }); // send error message to client
  }
};

// delete mathod
const deleteEmloyee = async (req, res) => {
  try {
    const deleteEmployee = await Employee.findByIdAndDelete(
      req.params.id.trim()
    );
    res.status(204).send();
  } catch (err) {
    console.error("Update error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message }); // send error message to client
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  UpdateEmployee,
  deleteEmloyee,
};
