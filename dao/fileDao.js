/**
 * Created by MuSheng on 2016/7/7.
 * user数据库操作
 */

//实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./fileSqlMapping');

var fs = require('fs');

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
    addFile : function(req, res, fileInfo){
        pool.getConnection(function(err, connection){
            //建立连接，插入新数据
            var fileurl = fileInfo.fileurl.replace('./public/', '');
            connection.query($sql.insert, [fileInfo.filename, fileurl, fileInfo.filetype, fileInfo.filesize, fileInfo.uid, file.savename], function (err, result) {
                console.log(result);

                var ret = {
                    code : 200,
                    msg : '上传成功，接收文件：' + fileInfo.filename + '，\n 文件大小：' + fileInfo.filesize + '，\n 文件类型：' + fileInfo.filetype + '，\n 存放路径：' + fileurl,
                    fid : result.insertId,
                    filename : fileInfo.filename,
                    filesize : fileInfo.filesize,
                    fileurl : fileurl,
                    savename : fileInfo.savename
                };

                //返回json给前台
                jsonWrite(res, ret);
                //释放连接
                connection.release();
            });
        });
    },
    delFile : function (req, res) {
        pool.getConnection(function(err, connection){
            //获取前台参数
            var param = req.body || req.query || req.params;
            //建立连接，查询数据
            connection.query($sql.queryById, [param.fid], function(err, result){
                if(result && result.length > 0){
                    console.log('file_queryById:');
                    console.log(result);
                    var filepath = './public/' + result[0].fileurl + result[0].savename;
                    fs.exists(filepath, function () {
                        fs.unlink(filepath, function (err) {
                            console.log(err);
                        });
                    });
                } else {}
            });

            connection.query($sql.delete, [param.fid], function (err, result) {
                console.log(result);
                var ret = {};
                if(result){
                    ret = {
                        code : 200,
                        msg : '操作成功'
                    }
                } else {
                    ret = {
                        code : 500,
                        msg : '操作失败'
                    }
                }
                console.log(ret);
                //返回json给前台
                jsonWrite(res, ret);

                //释放连接
                connection.release();
            });
        });
    },
    queryFileByUid : function(req, res, uid){
        pool.getConnection(function(err, connection){
            //建立连接，查询数据
            connection.query($sql.queryByUid, [uid], function (err, result) {
                console.log('result: ');
                console.log(result);
                jsonWrite(res, result);
                //释放连接
                connection.release();
            });
        });
    }
};