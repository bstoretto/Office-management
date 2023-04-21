const {
    create,
    getReportByUserId,
    getReport,
    updateReport,
    deleteReport,
} = require("./report.service");


module.exports = {
    createReport: (req, res) => {
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
    getReportByUserId: (req, res) => {
        const id = req.params.id;
        getReportByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: false,
                    message: "Report not Found"
                });
            }
            return res.json({
                success: true,
                data: results
            });
        });
    },
    getReport: (req, res) => {
        getReport((err, results) => {
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
    updateReport: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        updateReport(body, id, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }
            if (!results) {
                return res.json({
                    success: false,
                    message: "Failed to update Report"
                })
            }
            return res.json({
                success: true,
                message: "Report updated successfully"
            });
        });
    },
    deleteReport: (req, res) => {
        const id = req.params.id;
        deleteReport(id, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }
            return res.json({
                success: true,
                message: "Report deleted successfully"
            });
        });
    }
}