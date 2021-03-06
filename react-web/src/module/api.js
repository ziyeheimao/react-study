// import { Message, Button, Input, Form, } from 'element-react';

const baseUrl = 'http://127.0.0.1:666/' // 请求的服务器地址
const headers = {'Content-Type': 'application/json; charset=utf-8'} // 请求头
const toJSON = function (obj) { return JSON.stringify(obj); } // 重要！将对象转换成json字符串

// ------------------------------- 接口字符串 -------------------------------
// 通用接口: (用户登陆\注册\信息等)
const user = {
  login: `user/login`,
  reg: `user/res`
}
// 知了知了

// 静逸导航

// 财富精灵

// 租房管家

// 游戏人生

// 掌阅万卷

// 系统管理

// ------------------------------- 接口字符串 -------------------------------


 const api = {
  // a () {
  //   fetch(
  //     `http://127.0.0.1:666/user/login`,
  //     {
  //       method: 'POST',
  //       headers,
  //       body: toJSON
  //     },
  //   )
  // },

  // getData () { // 请求数据函数
  //   fetch(`http://127.0.0.1:666/`, {
  //     method: 'GET'
  //   }).then(res => res.text()).then(
  //     data => {
  //       console.log(data)
  //     }
  //   )
  // },
  login (data) {
    return fetch(baseUrl+user.login, {method: 'POST', headers, body: toJSON(data)})
  }
}
export default api;