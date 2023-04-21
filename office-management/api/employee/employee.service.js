const pool = require("./../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into employee(name, company, city, state) 
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
    getEmployee: callBack => {
        pool.query(
            `select id, name, company, city, state from employee`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getEmployeeByUserId: (id, callBack) => {
        pool.query(
            `select id,name,company,city,state from employee where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateEmployee: (data, id, callBack) => {
        pool.query(
            `update employee set name=?, company=?, city=?, state=? where id = ${id}`,
            [
                data.name,
                data.company,
                data.city,
                data.state
                // data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteEmployee: (id, callBack) => {
        pool.query(
            `delete from employee where id = ?`,
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