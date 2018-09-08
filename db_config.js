var mysql = require("mysql");

var pool = mysql.createPool({
    host: "rm-2ze6ns9qh4qu2d4bkvo.mysql.rds.aliyuncs.com",
    user: "root",
    password: "Jiajia!23",
    database: "hkk"
});

function db(sql, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();
        });
    });
}

module.exports = db;