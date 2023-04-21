const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into department(name, company, city, state) 
                  values(?,?,?,?)`,
            [
                data.name,
                data.company,
                data.city,
                data.state
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    // getUserByUserEmail: (email, callBack) => {
    //     pool.query(
    //         `select * from registration where email = ?`,
    //         [email],
    //         (error, results, fields) => {
    //             if (error) {
    //                 callBack(error);
    //             }
    //             return callBack(null, results[0]);
    //         }
    //     );
    // },
    getDepartment: callBack => {
        pool.query(
            `select id, name, company, city, state from department`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getDepartmentByUserId: (id, callBack) => {
        pool.query(
            `select id,name,company,city,state from department where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateDepartment: (data, id, callBack) => {
        pool.query(
            `update department set name=?, company=?, city=?, state=? where id = ${id}`,
            [
                data.name,
                data.company,
                data.city,
                data.state
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteDepartment: (id, callBack) => {
        pool.query(
            `delete from department where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}