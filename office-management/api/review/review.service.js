const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into review(reviewName, reviewer, beginOn, dueBy, status) 
                  values(?,?,?,?,?)`,
            [
                data.reviewName,
                data.reviewer,
                data.beginOn,
                data.dueBy,
                data.status
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getReview: callBack => {
        pool.query(
            `select id, reviewName, reviewer, beginOn, dueBy, status from review`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getReviewByUserId: (id, callBack) => {
        pool.query(
            `select id,reviewName,reviewer,beginOn,dueBy,status from review where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateReview: (data, id, callBack) => {
        pool.query(
            `update review set reviewName=?, reviewer=?, beginOn=?, dueBy=?, status=? where id = ${id}`,
            [
                data.reviewName,
                data.reviewer,
                data.beginOn,
                data.dueBy,
                data.status,
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
    deleteReview: (id, callBack) => {
        pool.query(
            `delete from review where id = ?`,
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