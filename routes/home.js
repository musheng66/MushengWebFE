var express = require('express');
var router = express.Router();

/* 主页 */
router.get('/', function(req, res, next) {
  res.render('home', { title: '首页', active_a: 'home' });
});

/* 关于 */
router.get('/abouts', function(req, res, next) {
  res.render('abouts', { title: '关于', active_a: 'abouts' });
});

/* 联系 */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '联系', active_a: 'contact' });
});

module.exports = router;
