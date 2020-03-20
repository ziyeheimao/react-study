import React from 'react'
import {Link} from 'react-router-dom'
import '../../module/style.scss'
import './index.scss'
// import ReactDOM from 'react-dom'

class Home extends React.Component{
  render(){
    return(
      <div className='home-ctn'>
        <header>
          <h3>首页home</h3>
        </header>

        <section>
          <nav>
            <Link to='/'>
              <div className='title'>main</div>
            </Link>
            <Link to='login'>
              <div className='title'>login</div>
            </Link>
            <Link to='test'>
              <div className='title'>test</div>
            </Link>
            <Link to='fetch'>
              <div className='title'>fetch</div>
            </Link>
          </nav>
          <main>main</main>
        </section>

        <footer>footer</footer>
      </div>
    )
  }
}

export default Home;