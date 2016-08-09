/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.5.5-10.0.17-MariaDB-log : Database - webfe
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`webfe` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `webfe`;

/*Table structure for table `webfe_file` */

DROP TABLE IF EXISTS `webfe_file`;

CREATE TABLE `webfe_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `filename` varchar(100) DEFAULT NULL COMMENT '文件全名',
  `fileurl` varchar(100) DEFAULT NULL COMMENT '文件保存路径',
  `filetype` varchar(100) DEFAULT NULL COMMENT '文件类型',
  `filesize` varchar(100) DEFAULT NULL COMMENT '文件大小',
  `uid` int(11) DEFAULT NULL COMMENT '外键，上传者id',
  `savename` varchar(100) DEFAULT NULL COMMENT '文件存储名称，以时间戳命名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

/*Table structure for table `webfe_user` */

DROP TABLE IF EXISTS `webfe_user`;

CREATE TABLE `webfe_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(30) DEFAULT NULL COMMENT '昵称',
  `username` varchar(30) DEFAULT NULL COMMENT '用户名',
  `password` varchar(30) DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
