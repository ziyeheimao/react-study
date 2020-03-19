import React from 'react'
import {Link} from 'react-router-dom'
// import ReactDOM from 'react-dom'

class Home extends React.Component{
  render(){
    return(
      <div>
        <div>Home</div>

        <Link to='Page1'>
          <div>Page1</div>
        </Link>
        <Link to='Page2'>
          <div>Page2</div>
        </Link>
        <Link to='Page3'>
          <div>Page3</div>
        </Link>
      </div>
    )
  }
}

export default Home;