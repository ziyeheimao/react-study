import React from 'react'
// import {Link} from 'react-router-dom'
import { Button, Input } from 'element-react';
// import ReactDOM from 'react-dom'
import './login.scss'
import loginImg from './login.png'

class Login extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      form: {
        name: '',
        region: '',
        date1: null,
        date2: null,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  }

  render () {
    return (
      <div className='login-ctn'>
        <section>
          <div className='img'>
            <img src={loginImg} alt='loginImg'></img>
          </div>

          <div className='login'>
            <Input placeholder="请输入内容" />
            <Input placeholder="请输入内容" />
            <Button>立即登录</Button>
          </div>
        </section>
      </div>
    )
  }
}


export default Login;