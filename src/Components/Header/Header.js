import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import me from '../../Images/me.jpg'
import Button from '../../Components/Button/Button'
import Menu from '../../Components/Menu/Menu'
import './Header.css'

class Header extends Component {

  constructor(props, context) {

    super(props, context);
    
    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }
  
  handleMouseDown(e) {
    this.toggleMenu(e);
  }

  render() {
    return(
      <header className='header'>
        <Link to='/' className='me'>
            <img
              className='me__image'
              alt='user avatar'
              src={me}
            />
            <div className='who'>
              <h4>Daniel Quintero</h4>
              <p>Software Developer</p>
              <p>Industrial Engineer</p>
            </div>
        </Link>
        <div className='menuContainer'>
            <ul className='menu__list'>
                <li>
                  <Link className='menu__list--item' to='/'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='menu__list--item' to='/projects'>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className='menu__list--item' to='/contact'>
                    Contact
                  </Link>
                </li>
            </ul>
        </div>
        <Button 
          handleMouseDown={this.handleMouseDown} 
        />
        <Menu
          menuVisibility={this.state.visible} 
          handleMouseDown={this.handleMouseDown}
        />
      </header>
    )
  }

}

export default Header
