import React from 'react'
// import ReactDOM from 'react-dom'
import './style.css'

let style = {
  backgroundColr: 'red', // - 变驼峰
  outline: '1px solid red',
  padding: '20px'
}
class Page1 extends React.Component{
  render(){
    return(
      <div>
        <div className='asd' style={style}>Page1</div>
      </div>
    )
  }
}

export default Page1;