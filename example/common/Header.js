import React from 'react'
import { Link, Control } from 'react-keeper'
import { Boxer } from 'react-boxer'
import Login from './Login'
import './com.css'

export default class Header extends React.Component {

  reLogin() {
    Boxer.add(<Login title='ReLogin'/>, 5)
  }

  render() {

    return (
      <header className='navbar navbar-static-top navbar-inverse bs-docs-nav' id='top' role='banner'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link to='#/' state={{ id: 'home', time: new Date().toLocaleString() }} className='navbar-brand'>react-keeper</Link>
          </div>
          <nav className='collapse navbar-collapse bs-navbar-collapse' role='navigation'>
            <ul className='nav navbar-nav'>
              <li className={ Control.path === '/'? 'active' : '' }>
                <Link to='/' state={{ id: 'home', time: new Date().toLocaleString() }}>Home</Link>
              </li>
              <li className={ Control.path.indexOf('/products') === 0? 'active' : '' }>
                <Link to='/products' state={{ id: 'products', time: new Date().toLocaleString() }}>Products</Link>
              </li>
              <li className={ Control.path.indexOf('/aboutus') === 0? 'active' : '' }>
                <Link to='/aboutus' state={{ id: 'aboutus', time: new Date().toLocaleString() }}>AboutUs</Link>
              </li>

              <li><a></a></li>
              <li><a></a></li>
              <li><a onClick={ ()=> Control.go(-1) }>Back -1</a></li>
              <li><a onClick={ ()=> Control.go(-3) }>Back -3</a></li>
              <li><a onClick={ ()=> Control.go(1) }>Forward</a></li>

              <li><a>{ Control.path } - { JSON.stringify(Control.state) }</a></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='javascript:void(0)' onClick={ this.reLogin }>Relogin</a>
              </li>
              <li className={ Control.path.indexOf('/host') === 0? 'active' : '' }>
                <Link to='/host'>User</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
