import React, { Component } from 'react'
import Description from '../Description/Description'
import Skills from '../Skills/Skills'
import siteConfig from '../../Data/siteData'
import './Main.css'

class Main extends Component {

    render() {
        return(
            <div className='aboutContainer'>
                <div className='aboutText'>
                    <div className='description'>
                        <Description 
                            title='Hello world!' 
                            text={siteConfig.aboutDescription} 
                        />
                    </div>
                </div>
                <div className='skillsContainer'>
                    <div className='skillsBars'>
                        <Skills 
                            title='My technologies stack' 
                            skills={siteConfig.skills} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
