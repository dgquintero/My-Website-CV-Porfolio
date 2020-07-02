import React, { Component } from 'react'
import './Button.css'

class Button extends Component {

    render () {
        return(
            <div className='buttonContainer'>
                <button
                    type='button' 
                    id='roundButton'
                    onMouseDown={this.props.handleMouseDown}
                >
                    +
                </button>
            </div>
        )
    }

}

export default Button