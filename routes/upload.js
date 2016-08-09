var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var fs = require('fs');
var util = require('util');
var fileDao = require('../dao/fileDao');

/* 主页 */
router.get('/', function(req, res, next) {
  res.render('home', { title: '首页', active_a: 'home' });
});

/* jqueryfileupload */
router.all('/jqueryfileupload', function(req, res, next) {
    var ret = {};
	//获取日期，JS不支持格式化，因此需要单独获取年月日再进行拼接
    var date = new Date();
	var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if(month < 10){
        month = '0' + month.toString();
    }
    var day = date.getDate();
    if(day < 10){
        day = '0' + day.toString();
    }
    var dateUrl = year.toString() + month.toString() + day.toString();
    //var dateUrl = date.toLocaleDateString().replace(/-/g, '');
    var uid = req.cookies.webfe_user; //这是个字典对象，你可以用括号的方式获得
    //创建路径 fs.mkdirSync方法只能建立单级目录，需要多次创建目录
    var dstheadPath = './public/upload_tmp/jqueryfileupload/' + dateUrl + '/';
    if (fs.existsSync(dstheadPath)) {
        console.log(dstheadPath + '已存在');
    } else {
        fs.mkdirSync(dstheadPath);
        console.log(dstheadPath + '已创建\n');
    }
    dstheadPath += uid.toString() + '/';
    if (fs.existsSync(dstheadPath)) {
        console.log(dstheadPath + '已存在');
    } else {
        fs.mkdirSync(dstheadPath);
        console.log(dstheadPath + '已创建\n');
    }
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({uploadDir: dstheadPath});
    //上传完成后处理
    form.parse(req, function (err, fields, files) {
        var filesTmp = JSON.stringify(files, null, 2);

        if (err) {
            console.log('parse error: ' + err);
            ret = {
                code : 1,
                msg : '上传失败，服务器接收错误'
            };
            jsonWrite(res, ret);
        } else {
            console.log('parse files: ' + filesTmp);
            var inputFile = files['files[]'][0];
            var uploadedPath = inputFile.path;
            var filename = inputFile.originalFilename;
            var dstPath = dstheadPath + filename;
            //重命名为真实文件名
            fs.rename(uploadedPath, dstPath, function (err) {
                if (err) {
                    console.log('rename error: ' + err);
                    ret = {
                        code : 2,
                        msg : '上传失败，重命名错误'
                    };
                    jsonWrite(res, ret);
                } else {
                    console.log('rename ok');
                }
            });
            //获取文件类型
            var filetype = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
            //获取文件大小
            var filesizeOrigin = inputFile['size'];
            var filesize = '';
            if(filesizeOrigin/1024 < 1){
                filesize = filesizeOrigin + ' 字节';
            } else {
                if(filesizeOrigin/(1024*1024) <1){
                    filesize = Math.ceil(filesizeOrigin/1024) + ' KB';
                } else {
                    if(filesizeOrigin/(1024*1024*1024) <1){
                        filesize = Math.ceil(filesizeOrigin/(1024*1024)) + ' MB';
                    } else {
                        filesize = Math.ceil(filesizeOrigin/(1024*1024*1024)) + ' GB';
                    }
                }
            }
            var fileInfo = {
                filename : inputFile.originalFilename,
                fileurl : dstheadPath,
                filesize : filesize,
                filetype : filetype,
                uid : uid

            };
            fileDao.addFile(req, res, fileInfo);
        }

        /*res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
        res.write('received upload:\n\n');
        res.end(util.inspect({fields: fields, files: filesTmp}));*/

    });
});

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

module.exports = router;
