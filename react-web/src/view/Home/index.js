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
      grid: {
        width: ''
      },
      bigGrid: {
        width: ''
      },
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
  componentWillMount () {
    // console.log(api)
  }
  componentDidMount () {
    let tableStyle = getComputedStyle(this.dom,null)
    let tableWidth = tableStyle.width
    tableWidth = tableWidth.slice(0, -2)

    let gridWidth = (tableWidth - (15 * 5)) / 4
    let bigGridWidth = gridWidth * 2 +15

    // this.state.bigGrid.width = bigGridWidth
    // this.state.grid.width = gridWidth

    // this.setState({
    //   bigGrid: {width: bigGridWidth},
    //   grid: {width: gridWidth}
    // })
    console.log(this.state.grid.width)
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
              <table cellSpacing='15px' ref={dom=>this.dom=dom}>
                <tbody>
                  <tr>
                    <td rowSpan='2'>{/* style={{width: this.state.grid.width}} */}
                      {this.state.grid.width}
                      受恶意呢日哦内蒙古
                      {/* <img src='http://via.placeholder.com/350X700/fff/000?text=hello world' alt='mode1'></img> */}
                    </td>
                    <td rowSpan='2' >
                      {/* style={this.state.grid} */}
                      受恶意呢日哦内蒙古
                      {/* <img src={mode2} alt='mode2'></img> */}
                    </td>
                    <td colSpan='2'>
                      受恶意呢日哦内蒙古
                      {/* <img src={mode3} alt='mode3'></img> */}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      受恶意呢日哦内蒙古
                      {/* <img src={mode4} alt='mode4'></img> */}
                    </td>
                    <td>
                      受恶意呢日哦内蒙古
                      {/* <img src={mode5} alt='mode5'></img> */}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      受恶意呢日哦内蒙古
                      {/* <img src={mode6} alt='mode6'></img> */}
                    </td>
                    <td colSpan='2'>
                      受恶意呢日哦内蒙古
                      {/* <img src={mode7} alt='mode7'></img> */}
                    </td>
                    <td>
                      受恶意呢日哦内蒙古
                      {/* <img src={mode8} alt='mode8'></img> */}
                    </td>
                  </tr>
                </tbody>
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