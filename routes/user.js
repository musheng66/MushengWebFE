/**
 * Created by MuSheng on 2016/7/7.
 * user路由
 */
var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');

/* 新建用户 */
router.all('/addUser', function(req, res, next) {
    /*req.params.xxxxx 从path中的变量
    req.query.xxxxx 从get中的?xxxx=中
    req.body.xxxxx 从post中的变量
    还可以req.param(“id”)得到*/
    console.log('addUser controller param:' + 'nickname:' + req.body.nickname + ' & ' + 'username:' + req.body.username);
    userDao.add(req, res, next);
});

/* 用户登录 */
router.all('/login', function(req, res) {
    console.log('login controller param:' + req.body.username);
    userDao.loginQuery(req, res);
});

/* 用户注销 */
router.all('/del', function(req, res) {
    console.log('del controller param:' + req.body.id);
    userDao.delUser(req, res);
});

module.exports = router;