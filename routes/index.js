var express = require('express');
var router = express.Router();

/* 欢迎页 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '欢迎页' });
});

module.exports = router;
