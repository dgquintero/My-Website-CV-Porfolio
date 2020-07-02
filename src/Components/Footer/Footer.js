import React from 'react'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='smContainer'>
            <a href='https://www.linkedin.com/in/danielgustavoquintero/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='Linkedin-sm' />
            </a>
            <a href='https://github.com/dgquintero' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='GitHub-sm' />
            </a>
            <a href='https://medium.com/@dgquintero02' target='_blank' rel='noopener noreferrer'>
                <FaMedium className='Medium-sm' />
            </a>
        </div>
        {/* <span>Copyright © {new Date().getFullYear()}, Armando Bringas</span> */}
    </footer>
  )
}

export default Footer
