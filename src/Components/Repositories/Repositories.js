import React, { useEffect, useState } from 'react'
import Repo from '../Repo/Repo'
import './Repositories.css'

const Repositories = () => {
    
    const [repo, setRepo] = useState([])
    const [repoCount, setRepoCount] = useState([])

    useEffect(() => {

        const data = sessionStorage.getItem('repo')
        let repos
        if(data) {
            repos = JSON.parse(data)
            setRepoCount(repos.length)
            repos = repos.slice(8, 14)
            return setRepo(repos)
        } 

        const getRepos = async () => {
            const response = await fetch('https://api.github.com/users/dgquintero/repos')
            repos = await response.json()
            setRepoCount(repos.length)
            sessionStorage.setItem('repo', JSON.stringify(repos))
            repos = repos.slice(7)
            setRepo(repos)
        }

        getRepos()

    }, [])

    return(
        <div className='reposContainer'>
            <h1>My latest repositories on GitHub</h1>
            <ul className='repositories__container'>
                    {
                        repo.map((repo) => {
                           return <Repo key={repo.id} repos={repo} />
                        })
                    }
                    <a 
                        className='linkToRepos'
                        href='https://github.com/dgquintero?tab=repositories'
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        see more at GitHub ({repoCount})
                    </a>
            </ul>
        </div>
    )
}

export default Repositories
