const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const Employee = require("../models/Employee");

// get ,post , put/patch ,delete

// export this route to main file
router.post("/add-employee", employeeController.createEmployee);
// route mathod for get

router.get("/allEmployees", employeeController.getEmployees);
//put
router.put("/updateEmployee/:id", employeeController.UpdateEmployee);
//delete
router.delete("/delete/:id", employeeController.deleteEmloyee);
module.exports = router;

// http://localhost:5000/employees//updateEmployee/686a416c84f3922ef830ff4b
