import React from 'react'
// import ReactDOM from 'react-dom'
// import {Link} from 'react-router-dom'
// import { Button } from 'element-react'; // Message , Input, Form
import './index.scss'

class Home extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      // form: {
      //   name: '',
      //   pwd: ''
      // },
      // rules: {
      //   name: [
      //     { required: true, message: '请输入账号', trigger: 'blur' }
      //   ],
      //   pwd: [
      //     { required: true, message: '请输入密码', trigger: 'blur' }
      //   ]
      // }
    };
  }

  render(){
    return(
      <div className='home-ctn'>
        <div className='ctn-box'>
          <header>
            <nav>
              <div className='logo'>
                <h1>logo</h1>
              </div>
              <div className='btn'>
                {/* <Button plain={true} type="success" onClick={this.about.bind(this)}>关于我们</Button>
                <Button plain={true} type="primary" onClick={this.userSet.bind(this)}>用户设置</Button>
                <Button plain={true} type="success" onClick={this.login.bind(this)}>用户登录</Button> */}

                <a className='my-link' onClick={this.about.bind(this)}>关于我们</a>
                <a className='my-link' onClick={this.userSet.bind(this)}>用户设置</a>
                <a className='my-link2' onClick={this.login.bind(this)}>用户登录</a>
              </div>
            </nav>
          </header>

          <section>
            <nav>
              <table cellspacing='15px'>
                <tr>
                  <td rowspan='2'>1</td>
                  <td rowspan='2'>2</td>
                  <td colspan='2'>3</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td colspan='2'>2</td>
                  <td>3</td>
                </tr>
              </table>
            </nav>
          </section>
        </div>
      </div>
    )
  }

  about (e) { // 关于我们
    e.preventDefault();
    console.log('关于我们')
  }
  login (e) { // 用户登录
    e.preventDefault();
    console.log('用户登录')
  }
  userSet (e) { // 用户设置
    e.preventDefault();
    console.log('用户设置')
  }
}

export default Home;