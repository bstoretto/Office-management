const {
    create,
    getEmployeeByUserId,
    getEmployee,
    updateEmployee,
    deleteEmployee,
} = require("./employee.service");


module.exports = {
    createEmployee: (req, res) => {
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
    getEmployeeByUserId: (req, res) => {
        const id = req.params.id;
        getEmployeeByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: false,
                    message: "Record not Found"
                });
            }
            return res.json({
                success: true,
                data: results
            });
        });
    },
    getEmployee: (req, res) => {
        getEmployee((err, results) => {
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
    updateEmployee: (req, res) => {
        const id = req.params.id;
        const body = req.body;
        updateEmployee(body, id, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }
            if (!results) {
                return res.json({
                    success: false,
                    message: "Failed to update Employee"
                })
            }
            return res.json({
                success: true,
                message: "updated successfully"
            });
        });
    },
    deleteEmployee: (req, res) => {
        const id = req.params.id;
        deleteEmployee(id, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }
            return res.json({
                success: true,
                message: "Employee deleted successfully"
            });
            // if (!results) {
            //     return res.json({
            //         success: true,
            //         message: "Employee deleted successfully"
            //     });
            // }
            // return res.json({
            //     success: true,
            //     message: "Employee not found"
            // });
        });
    }
}