// 通过类声明组件
import React from 'react'
import View from './view'

class App2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: 'Info'
    }
  }
  render () {
  return (<View text={this.state.text}/>)
  }
}
export default App2;