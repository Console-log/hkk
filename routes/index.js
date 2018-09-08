var express = require('express');
var router = express.Router();

var db = require('../db_config');



router.get('/username', function (req, res, next) {
    // db('INSERT INTO main (name) VALUES ("123");', () => { });
    db('select name from main;', function (err, data) {
        let has = false;
        data.forEach((val) => {
            if (val.name == req.query.name) {
                has = true;
            }
        });
        res.send(has)
    })
});


router.get('/img', function (req, res, next) {
    express.static('img')
})

module.exports = router;
