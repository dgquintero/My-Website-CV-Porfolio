import React from 'react'
import './Repo.css'

const Repo = ({repos}) => {

    return(
        <li className='repositories__content'>
            <a 
                className='repo__link' 
                href={repos.html_url}
                target='_blank' rel='noopener noreferrer'
            >
                {repos.name}
            </a>
            <p>
                {repos.description}
            </p>
            <p 
                className='repositories__repo-date '
            >
                Updated: {new Date(repos.updated_at).toUTCString()}
            </p>
            {/* <div className='repositories__repo-star'> ★ {props.repo.stargazers_count}</div> */}
            <hr/>
        </li>
    )
}

export default Repo