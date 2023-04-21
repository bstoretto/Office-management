const router = require("express").Router();
// const { checkToken } = require("../auth/token_validation");
const {
  createDepartment,
  getDepartmentByUserId,
  getDepartment,
  updateDepartment,
  deleteDepartment
} = require("./department.controller");
router.get("/", getDepartment);
router.post("/", createDepartment);
router.get("/:id", getDepartmentByUserId);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);

module.exports = router;