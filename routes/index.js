var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  express.static('public')
});

router.get('/test', function (req, res, next) {
  res.send([
    {
      name: '舒缓的起床音乐',
      music: '../music/a1.mp3'
    },
    {
      name: '胡一天叫你起床',
      music: '../music/a2.mp3'
    },
    {
      name: '白噪音',
      music: '../music/a3.mp3'
    },
  ])
});

module.exports = router;
