/**
 * Created by MuSheng on 2016/7/7.
 * CRUD SQL语句
 */
var file = {
  insert:'INSERT INTO webfe_file(id, filename, fileurl, filetype, filesize, uid) VALUES(0,?,?,?,?,?)',
  update:'update webfe_file set filename=?, fileurl=?, filetype=?, filesize=?, uid=? where id=?',
  delete: 'delete from webfe_file where id=?',
  queryById: 'select * from webfe_file where id=?',
  queryByUid: 'select * from webfe_file where uid=?',
  queryAll: 'select * from webfe_file'
};

module.exports = file;