const mysql = require('mysql'); // sql模块
const toolClass = require('./toolClass'); // 引入通用属性和方法

// 创建连接池对象
var pool = mysql.createPool({
  host: toolClass.host,
  port: '3306',
  user: 'root',
  password: '',
  database: 'jingyi',
  connectionLimit: 25,
  multipleStatements: true
});

Object.freeze(pool); // 冻结连接池

module.exports = pool; // 导出连接池