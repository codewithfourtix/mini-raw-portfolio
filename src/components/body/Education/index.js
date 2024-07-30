import React from 'react'
import Separator from '../../common/social-contact/seperator'
import { EducationData } from '../../data/education'
import EducationCard from './education-card';
import './education.css'
function Education() {
  const data=EducationData;
  return (
    <div className='education'>
      <Separator/>
      <label className='section-title'>Education</label>
      <div className='education-list'>
        {data.map((item)=>{
          return(
            <EducationCard item={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default Education
