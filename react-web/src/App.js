import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './view/Login/Login'
import Home from './view/Home/Home'


class App extends React.Component{
  render () {
    return(
      <Router>
        <div>
          <Route path='/login' component={Login}/>
          <Route path='/' exact component={Home}/>
        </div>
      </Router>
    )
  }
}

export default App;