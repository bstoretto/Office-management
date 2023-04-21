const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into report(reviewer, status, employment, email, jobTitle, teamName) 
                  values(?,?,?,?,?,?)`,
            [
                data.reviewer,
                data.status,
                data.employment,
                data.email,
                data.jobTitle,
                data.teamName
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getReport: callBack => {
        pool.query(
            `select id, reviewer, status, employment, email, jobTitle, teamName from report`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getReportByUserId: (id, callBack) => {
        pool.query(
            `select id,reviewer,status,employment,email,jobTitle,teamName from report where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateReport: (data, id, callBack) => {
        pool.query(
            `update report set reviewer=?, status=?, employment=?, email=?, jobTitle=?, teamName=? where id = ${id}`,
            [
                data.reviewer,
                data.status,
                data.employment,
                data.email,
                data.jobTitle,
                data.teamName,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteReport: (id, callBack) => {
        pool.query(
            `delete from report where id = ?`,
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