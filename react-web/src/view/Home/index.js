import React from 'react'
// import ReactDOM from 'react-dom'
// import {Link} from 'react-router-dom'
// import { Button } from 'element-react'; // Message , Input, Form
import './index.scss'
import mode1 from './img/mode1.jpg'
import mode2 from './img/mode2.jpg'
import mode3 from './img/mode3.jpg'
import mode4 from './img/mode4.jpg'
import mode5 from './img/mode5.jpg'
import mode6 from './img/mode6.jpg'
import mode7 from './img/mode7.jpg'
import mode8 from './img/mode8.jpg'


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

                <span className='my-link' onClick={this.about.bind(this)}>关于我们</span>
                <span className='my-link' onClick={this.userSet.bind(this)}>用户设置</span>
                <span className='my-link2' onClick={this.login.bind(this)}>用户登录</span>
              </div>
            </nav>
          </header>

          <section>
            <nav>
              <table cellspacing='15px'>
                <tr>
                  <td rowspan='2'><img src={mode1} alt='mode1'></img></td>
                  <td rowspan='2'><img src={mode2} alt='mode2'></img></td>
                  <td colspan='2'><img src={mode3} alt='mode3'></img></td>
                </tr>
                <tr>
                  <td><img src={mode4} alt='mode4'></img></td>
                  <td><img src={mode5} alt='mode5'></img></td>
                </tr>
                <tr>
                  <td><img src={mode6} alt='mode6'></img></td>
                  <td colspan='2'><img src={mode7} alt='mode7'></img></td>
                  <td><img src={mode8} alt='mode8'></img></td>
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