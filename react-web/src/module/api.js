import { Button, Input, Form, Message } from 'element-react';

let api = {
  index () { // 请求数据函数
    fetch(`http://127.0.0.1:666/`, {
      method: 'GET'
    }).then(res => res.text()).then(
      data => {
        // this.setState({ mytext: data })
        console.log(data)
        Message({
          message: data,
          type: 'success'
        });
      }
    )
  }
}

export default api;