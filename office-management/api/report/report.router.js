const router = require("express").Router();
const {
  createReport,
  getReportByUserId,
  getReport,
  updateReport,
  deleteReport
} = require("./report.controller");
router.get("/", getReport);
router.post("/", createReport);
router.get("/:id", getReportByUserId);
router.put("/:id", updateReport);
router.delete("/:id", deleteReport);

module.exports = router;