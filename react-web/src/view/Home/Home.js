import React from 'react'
import {Link} from 'react-router-dom'
// import ReactDOM from 'react-dom'

class Home extends React.Component{
  render(){
    return(
      <div>
        <div>首页</div>

        <Link to='login'>
          <div>login</div>
        </Link>
      </div>
    )
  }
}

export default Home;