import React from 'react'
import './Description.css'

export default ({ title = '', text = '' }) => {
    return(
        <div>
            <h1>{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}