import React from 'react'
import {Link} from 'react-router-dom'
import api from '../../module/api'
import { Button, Input, Form, Message } from 'element-react';
import './index.scss'
class FetchAPI extends React.Component{
  getData () { // 请求数据函数
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
  a () {
    console.log(api)
  }
  render(){
    return(
      <div>
        FetchAPI
        <Link to='/'>
          <div className='title'>main</div>
        </Link>

        <div className='btn-box'>
          <Button type="primary" onClick={this.getData.bind(this)}>GIT</Button>
          <Button type="primary" onClick={api.index}>API下的GIT</Button>
        </div>

      </div>
    )
  }
}

export default FetchAPI;