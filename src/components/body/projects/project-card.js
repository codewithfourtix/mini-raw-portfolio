import React from 'react'
import './project-card.css'
function ProjectCard({project}) {
  return (
    <div className='project-card'>
      <div className='project-info'>
        <label className='project-title'>{project.title}</label>
        <div className='project-links'>
            {project.demo  && (<a target="_main " className='project-link' href={project.demo}>
                <div className='link-button' >
                  <i class="fi fi-rr-globe"></i>Demo
                  </div>
                  </a>)}
        </div>
        <p>{project.about}</p>
        <div className='project-tags'>
          {project.tags.map((tag)=>{
            return(
              <label className='tag'>{tag}</label>
            )
          })}
        </div>
      </div >
      <div className='project-photo'>
      <img alt=''   src={project.image1} className="project-photo1"/>
      <img alt=''   src={project.image2} className="project-photo2"/>
      </div>
    </div>
  )
}

export default ProjectCard
