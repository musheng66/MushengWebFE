var express = require('express');
var router = express.Router();

/* 欢迎页 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '欢迎' });
});

module.exports = router;

/*app.get('/', function (req, res) {
 res.send('Hello World!');
 });
 var server = app.listen(80, '阿里云的IP地址（选填，不填外网无法访问）', function () {
 var host = server.address().address;
 var port = server.address().port;
 console.log('Example app listening at http://%s:%s', host, port);
 }
 );*/