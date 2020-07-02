import React, { Component } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import './Info.css'

class Info extends Component {

    render() {
        return(
            <div className='infoContainer'>
                <div className='infoContent'>
                    <h1>Contact me!</h1>
                    <p>If you want to get in touch you can find me at:</p>
                    <div className='mailTo'>
                        <a 
                            href='mailto:dgquintero02@gmail.com'
                            rel='noopener noreferrer'
                        >
                            dgquintero02@gmail.com
                            <FaEnvelope className='mailIcon' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info
