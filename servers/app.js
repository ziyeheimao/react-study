const express = require('express');                // 服务器模块
// const session = require('express-session');     // 会话级状态存储
const cors = require('cors');                      // cors跨域
const bodyParser = require('body-parser');         // 引入body parser用于解析post的body
// const timer = require('./timer.js')             // 定时任务
const toolClass = require('./module/toolClass');   // 工具类
const user = require('./router/user');             // 路由: 用户模块



// 创建web服务器
const server = express();
const app = server.listen(666, function () {
  var port = app.address().port
  console.log(`服务器创建成功,端口 ${port} （づ￣3￣）づ╭❤～`);
})


// 托管静态资源到public目录下
server.use(express.static('public'));


// 跨域白名单配置
let ipArr = []
for (let i of toolClass.corsHost) {
  for (let j of toolClass.corsport) {
    ipArr.push(`${i}:${j}`)
  }
}
// console.log('跨域白名单', ipArr)
server.use(cors({
  'credentials': true,
  'origin': ipArr
}));


// body-parser配置
// server.use(bodyParser.urlencoded({ // 解析原生表单 post请求主体数据
//   extnded: false // 使用querystring解析数据
// }));


// 以json形式处理请求,修改post请求允许数据大小
server.use(bodyParser.json({ // 使用body parser用于解析post的body
  limit: '50mb' // 限制post请求大小为50MB, 用于base64数据传输
}));


// 中间件
// server.use(main.middleware.token)           // 自定义中间件: token
// server.use(main.middleware.power)           // 自定义中间件: 权限


server.use('/user', user);                  // 挂载路由: 用户模块
