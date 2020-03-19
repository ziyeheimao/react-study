// 包
const express = require('express'); // 服务器模块

// 创建web服务器
const server = express();
const app = server.listen(666, function () {
  var port = app.address().port
  console.log(`服务器创建成功,端口 ${port} （づ￣3￣）づ╭❤～`);
})

// 托管静态资源到public目录下
server.use(express.static('public'));

// 跨域问题
server.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 接口
server.get('/', function (req, res) {
  console.log('这是首页')
  res.send('这是首页');
})

