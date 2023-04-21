const {
    create,
    getDepartmentByUserId,
    getDepartment,
    updateDepartment,
    deleteDepartment,
} = require("./department.service");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createDepartment: (req, res) => {
        const body = req.body;
        // const salt = genSaltSync(10);
        // body.password = hashSync(body.password, salt);
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
    // login: (req, res) => {
    //     const body = req.body;
    //     getUserByUserEmail(body.email, (err, results) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         if (!results) {
    //             return res.json({
    //                 success: 0,
    //                 data: "Invalid email or password"
    //             });
    //         }
    //         const result = compareSync(body.password, results.password);
    //         if (result) {
    //             results.password = undefined;
    //             const jsontoken = sign({ result: results }, "sha256", {
    //                 expiresIn: "1h"
    //             });
    //             return res.json({
    //                 success: true,
    //                 message: "Login Successfully",
    //                 token: jsontoken
    //             });
    //         } else {
    //             return res.json({
    //                 success: false,
    //                 data: "Invalid email or password"
    //             });
    //         }
    //     });
    // },
    getDepartmentByUserId: (req, res) => {
        const id = req.params.id;
        getDepartmentByUserId(id, (err, results) => {
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
            // results.password = undefined;
            return res.json({
                success: true,
                data: results
            });
        });
    },
    getDepartment: (req, res) => {
        getDepartment((err, results) => {
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
    updateDepartment: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        updateDepartment(body, id, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }
            if (!results) {
                return res.json({
                    success: false,
                    message: "Failed to update Department"
                })
            }
            return res.json({
                success: true,
                message: "updated successfully"
            });
        });
    },
    deleteDepartment: (req, res) => {
        const id = req.params.id;
        deleteDepartment(id, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }
            return res.json({
                success: true,
                message: "Department deleted successfully"
            });
            // if (!results) {
            //     return res.json({
            //         success: true,
            //         message: "Department deleted successfully"
            //     });
            // }
            // return res.json({
            //     success: true,
            //     message: "Department not found"
            // });
        });
    }
}