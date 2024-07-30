import React from 'react'
import './web.css'
function Web() {
  return (
    <div className='web'>
      <div className='web-option'>
        <a href='#project' className='hover-underline'>
          <i class="fi fi-rr-edit-alt"></i>Projects
        </a>
      </div>
      <div className='web-option'>
        <a href='#skills' className='hover-underline' >
          <i class="fi fi-rr-laptop code option-icon "></i>Skills
        </a>
      </div>
      <div className='web-option'>
        <a href='#work' className='hover-underline'>
          <i class="fi fi-rr-briefcase option-icon"></i>Works
        </a>
      </div>
      <div className='web-option'>
        <a href='#contact' className='hover-underline'>
          <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  )
}

export default Web
