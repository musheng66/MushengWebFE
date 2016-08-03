var express = require('express');
var router = express.Router();
var fileDao = require('../dao/fileDao');

/* 主页 */
router.get('/', function(req, res, next) {
  res.render('home', { title: '首页', active_a: 'home' });
});

/* jqueryfileupload */
router.get('/jqueryfileupload', function(req, res, next) {
  res.render('demos/jqueryfileupload', { title: 'jQuery-File-Upload', active_a: 'none' });
});

router.all('/getuploadedfiles', function(req, res, next){
    var uid = req.cookies.webfe_user; //这是个字典对象，你可以用括号的方式获得
    fileDao.queryFileByUid(req, res, uid);
});

router.all('/deluploadedfile', function(req, res, next){
    fileDao.delFile(req, res);
});

/* msjs */
router.get('/msjs', function (req, res, next) {
    res.render('demos/msjs', { title: 'MsJS', active_a: 'none' });
});

/* pagewalkthrough */
router.get('/pagewalkthrough', function (req, res, next) {
    res.render('demos/pagewalkthrough', { title: 'PageWalkThrough', active_a: 'none'});
});

/* ztree */
router.get('/ztree', function (req, res, next) {
    res.render('demos/ztree', { title: 'zTree', active_a: 'none'});
});

/* layer */
router.get('/layer', function (req, res, next) {
    res.render('demos/layer', { title: 'layer', active_a: 'none'});
});

router.get('/layer-iframe', function (req, res, next) {
    res.render('demos/layer-iframe', {  });
});

/* css3animateit */
router.get('/css3animateit', function (req, res, next) {
    res.render('demos/css3animateit', { title: 'CSS3 Animate It', active_a: 'none'});
});

/* tinymce */
router.get('/tinymce', function (req, res, next) {
    res.render('demos/tinymce', { title: 'TinyMCE', active_a: 'none'});
});

/* jquerycookie */
router.get('/jquerycookie', function (req, res, next) {
    res.render('demos/jquerycookie', { title: 'JQueryCookie', active_a: 'none'});
});

/* jscookie */
router.get('/jscookie', function (req, res, next) {
    res.render('demos/jscookie', { title: 'JavaScriptCookie', active_a: 'none'});
});

/* bootstrapdatepicker */
router.get('/bootstrapdatepicker', function (req, res, next) {
    res.render('demos/bootstrapdatepicker', { title: 'BootstrapDatePicker', active_a: 'none'});
});

/* bootstrapvalidator */
router.get('/bootstrapvalidator', function (req, res, next) {
    res.render('demos/bootstrapvalidator', { title: 'BootstrapValidator', active_a: 'none'});
});

/* animate */
router.get('/animate', function (req, res, next) {
    res.render('demos/animate', { title: 'Animate', active_a: 'none'});
});

/* echarts */
router.get('/echarts', function (req, res, next) {
    res.render('demos/echarts', { title: 'ECharts', active_a: 'none'});
});

module.exports = router;
