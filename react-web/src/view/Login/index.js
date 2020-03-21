import React from 'react'
// import {Link} from 'react-router-dom'
import { Button, Input, Form, Message } from 'element-react';
// import ReactDOM from 'react-dom'
import './index.scss'
import loginImg from './login.png'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  }
  getData () { // 请求数据函数
    fetch(`http://127.0.0.1:666/`, {
      method: 'GET'
    }).then(res => res.text()).then(
      data => {
        // this.setState({ mytext: data })
        console.log(data)
      }
    )
  }

  handleSubmit (e) { // 提交
    e.preventDefault();
    let text = {name: this.state.name, pwd: this.state.pwd} //获取数据
    let send = JSON.stringify(text);   //重要！将对象转换成json字符串
    fetch(
      `http://127.0.0.1:666/`,
      {
        // method: 'GET',
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: send
      },
      ).then(res => res.json()).then(
      data => {
        // this.setState({ mytext: data })
        console.log(data)
      }
    )

    // this.refs.form.validate((valid) => {
    //   if (valid) {
    //     // alert(
    //     // `账号：${this.state.form.name}
    //     // 密码：${this.state.form.pwd}`);
    //     Message({
    //       message: `账号：${this.state.form.name} 密码：${this.state.form.pwd}`,
    //       type: 'success'
    //     });
    //   } else {
    //     console.log('error submit!!');
    //     return false;
    //   }
    // });
  }
  handleReset (e) { // 重置
    e.preventDefault();
    this.refs.form.resetFields();
  }
  onChange (key, value) {
    // console.log(key, value)
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  }

  getHeight () {
    return window.innerHeight
  }

  componentWillMount () {
    // console.log(height)

    // this.getData()
  }
  componentDidMount () { }

  render () {
    return (
      <div className='login-ctn'>{/* style={style} */}
        <section>
          <div className='img'>
            <img src={loginImg} alt='loginImg'></img>
          </div>

          <div className='login'>
            <h1>管理系统登录</h1>
            <Form ref="form" model={this.state.form} rules={this.state.rules}>{/* labelWidth="60" */}
              <Form.Item prop="name">{/*  label="账号" */}
                <Input placeholder="请输入账号" value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
              </Form.Item>

              <Form.Item prop="pwd">{/* label="密码" */}
                <Input placeholder="请输入密码" value={this.state.form.pwd} onChange={this.onChange.bind(this, 'pwd')}></Input>
              </Form.Item>

              {/* <Button>立即登录</Button> */}
              <Form.Item>
                <Button className='btn' type="primary" onClick={this.handleSubmit.bind(this)}>立即登录</Button>
              </Form.Item>
              <Form.Item>
                <Button className='btn' onClick={this.handleReset.bind(this)}>重 置</Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    )
  }
}


export default Login;