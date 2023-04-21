const router = require("express").Router();
const {
  createReview,
  getReviewByUserId,
  getReview,
  updateReview,
  deleteReview
} = require("./review.controller");
router.get("/", getReview);
router.post("/", createReview);
router.get("/:id", getReviewByUserId);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;