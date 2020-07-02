import React from 'react'
import styled from 'styled-components'
import SkillBar from './SkillsBar'

export default styled(({ className, title = 'Skills', skills = [] }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
        {skills.map(skill => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
    </div>
  )
})
`
  width: 100%;

  h1 {
    display: flex;
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {

    h1 {
      font-size: 18px;
    }

  }

`