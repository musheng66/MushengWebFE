/**
 * Created by MuSheng on 2016/7/7.
 * CRUD SQL语句
 */
var user = {
  insert:'INSERT INTO webfe_user(id, nickname, username, password) VALUES(0,?,?,?)',
  update:'update webfe_user set nickname=?, username=?, password=? where id=?',
  delete: 'delete from webfe_user where id=?',
  queryById: 'select * from webfe_user where id=?',
  queryByUsername: 'select * from webfe_user where username=?',
  queryAll: 'select * from webfe_user'
};

module.exports = user;