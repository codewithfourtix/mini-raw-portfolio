import React from 'react'
import './education-card.css'
function EducationCard({item}) {
  return (
    <div className='education-card'>
      <img  alt=''  src={item.schoolLogo} className='education-logo'/>
      <div className='education-info'>
        <label className='school-name'>{item.School}</label>
        <div>{item.degree}</div>
        <div className='education-dates '>
            <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className='Education-description'>
            <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
