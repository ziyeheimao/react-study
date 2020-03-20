import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './view/Login'
import Home from './view/Home'
import Test from './view/Test'
import Fetch from './view/FetchAPI'


class App extends React.Component{
  render () {
    return(
      <Router>
        <div>
          <Route path='/login' component={Login}/>
          <Route path='/' exact component={Home}/>
          <Route path='/test' component={Test}/>
          <Route path='/fetch' component={Fetch}/>
        </div>
      </Router>
    )
  }
}

export default App;