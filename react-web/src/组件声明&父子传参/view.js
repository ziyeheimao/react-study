import React from 'react'
class View extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
  return (<div>123{this.props.text}</div>)
  }
}
export default View;