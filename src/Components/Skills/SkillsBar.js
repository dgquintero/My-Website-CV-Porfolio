import React from 'react'
import styled from 'styled-components'

const SkillBar = ({ className, name, level }) => {
  return (
    <div className={className}>
      <p htmlFor={`${name}-bar`}>{name}</p>
      <div id={`${name}-bar`} className='skill__bar'>
        <div className='skill__level'></div>
      </div>
    </div>
  )
}

SkillBar.displaName = 'SkillBar'

export default styled(SkillBar)`
  width: 100%;

  p {
    font-size: 16px;
    margin-top 5px;
  }

  .skill__bar {
    width: 100%;
    height: 10px;
    padding: 1px;
    opacity: 0.75;
    border-radius: 2.5px;
    background-color: #D0D0D0;
  }

  .skill__level {
    height: 10px;
    border-radius: 2.5px;
    background-color: #171717;
    width: ${p => p.level || 0}%;
  }

  @media (max-width: 768px) {
    p {
      font-size: 12px;
    }
    
  }
`