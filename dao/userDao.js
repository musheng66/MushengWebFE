/**
 * Created by MuSheng on 2016/7/7.
 * user数据库操作
 */

//实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./userSqlMapping');

//使用连接池
var pool = mysql.createPool($util.extend({}, $conf.mysql));

//向前台返回json方法
var jsonWrite = function(res, ret){
    if(typeof ret === 'undefined'){
        res.json({
            code : '1',
            msg : '失败，未获取到返回结果'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add : function(req, res, next){
        pool.getConnection(function(err, connection){
           //获取前台参数，优先接收POST数据
            var param = req.body || req.query || req.params;
            //建立连接，插入新数据
            connection.query($sql.insert, [param.nickname, param.username, param.password], function (err, result) {
                console.log(result);
                if(result){
                    result = {
                        code : 200,
                        msg : '操作成功',
                        nickname : param.nickname,
                        username : param.username,
                        id : result.insertId
                    }
                } else {
                    result = {
                        code : 500,
                        msg : '操作失败'
                    }
                }

                //返回json给前台
                jsonWrite(res, result);

                //释放连接
                connection.release();
            });
        });
    },
    delUser : function (req, res) {
        pool.getConnection(function(err, connection){
            //获取前台参数
            var param = req.body || req.query || req.params;
            //建立连接，查询数据
            connection.query($sql.delete, [param.id], function (err, result) {
                console.log(result);
                if(result){
                    result = {
                        code : 200,
                        msg : '操作成功'
                    }
                } else {
                    result = {
                        code : 500,
                        msg : '操作失败'
                    }
                }
                //返回json给前台
                jsonWrite(res, result);

                //释放连接
                connection.release();
            });
        });
    },
    loginQuery : function(req, res){
        pool.getConnection(function(err, connection){
            //获取前台参数
            var param = req.body || req.query || req.params;
            //建立连接，查询数据
            connection.query($sql.queryByUsername, [param.username], function (err, result) {
                console.log(result);
                if(!result){
                    result = {
                        name : '使用者'
                    }
                }
                //返回json给前台
                jsonWrite(res, result);

                //释放连接
                connection.release();
            });
        });
    },
    usernameQuery : function (req, res) {
        pool.getConnection(function(err, connection){
            //获取前台参数
            var param = req.body || req.query || req.params;
            //建立连接，查询数据
            connection.query($sql.queryByUsername, [param.username], function (err, result) {
                console.log(result);
                if(!result || result.length == 0){
                    result = {
                        success : false,
                        valid : true
                    }
                } else {
                    result = {
                        success : true,
                        valid : false,
                        message : '已经存在'
                    }
                }
                //返回json给前台
                jsonWrite(res, result);

                //释放连接
                connection.release();
            });
        });
    }
};