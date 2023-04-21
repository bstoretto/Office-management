const router = require("express").Router();
const {
  createEmployee,
  getEmployeeByUserId,
  getEmployee,
  updateEmployee,
  deleteEmployee
} = require("./employee.controller");
router.get("/", getEmployee);
router.post("/", createEmployee);
router.get("/:id", getEmployeeByUserId);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;