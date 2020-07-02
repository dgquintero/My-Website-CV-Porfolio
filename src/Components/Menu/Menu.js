import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import './Menu.css'

class Menu extends Component {

  render() {

    let visibility = 'hide';

    if (this.props.menuVisibility) {
      visibility = 'show';
    }

    return(
      <div id='flyoutMenu' className={visibility}>
        <header className='menu__header'>
          <button 
            type='button'
            className='closeNav'
            onMouseDown={this.props.handleMouseDown}
          >
            x
          </button>
        </header>
        <div className='box'>
          <ul>
            <li className='nav-link'>
              <Link 
                to='/' 
                className='nav-link'
                onMouseDown={this.props.handleMouseDown}
              >
                About
              </Link>
            </li>
            <li className='nav-link'>
              <Link 
                to='/projects' 
                className='nav-link'
                onMouseDown={this.props.handleMouseDown}
              >  
                Projects
              </Link>
            </li>
            <li className='nav-link'>
              <Link 
                to='/contact' 
                className='nav-link'
                onMouseDown={this.props.handleMouseDown}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
    </div>
    )

  }

}

export default Menu
