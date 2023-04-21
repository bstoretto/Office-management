const {
    create,
    getReviewByUserId,
    getReview,
    updateReview,
    deleteReview,
} = require("./review.service");


module.exports = {
    createReview: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection errror"
                });
            }
            return res.status(200).json({
                success: true,
                data: results
            });
        });
    },
    getReviewByUserId: (req, res) => {
        const id = req.params.id;
        getReviewByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: false,
                    message: "Review not Found"
                });
            }
            return res.json({
                success: true,
                data: results
            });
        });
    },
    getReview: (req, res) => {
        getReview((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: true,
                data: results
            });
        });
    },
    updateReview: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        updateReview(body, id, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }
            if (!results) {
                return res.json({
                    success: false,
                    message: "Failed to update Review"
                })
            }
            return res.json({
                success: true,
                message: "Review updated successfully"
            });
        });
    },
    deleteReview: (req, res) => {
        const id = req.params.id;
        deleteReview(id, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }
            return res.json({
                success: true,
                message: "Review deleted successfully"
            });
        });
    }
}