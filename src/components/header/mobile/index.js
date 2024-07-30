import React from 'react'
import './mobile.css'
function Mobile({isOpen,setIsOpen}) {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
      <i class="fi fi-br-cross"></i>
      </div>
      <div className='mobile-options'>

      <div className='mobile-option'>
        <a href='#project' className='hover-underline'>
        <i class="fi fi-rr-settings icons-spacing"></i>Projects
        
        </a>
        
      </div>
      
      <div className='mobile-option'>
        <a href='#skills' className='hover-underline' >
          <i class="fi fi-rr-laptop code option-icon  icons-spacing"></i>Skills
          
        </a>
        
      </div>
      
      <div className='mobile-option'>
        <a href='#work' className='hover-underline'>
          <i class="fi fi-rr-briefcase option-icon icons-spacing"></i>Works
          
        </a>
        
      </div>
      
      <div className='mobile-option'>
        <a href='#contact' className='hover-underline'>
          <i class="fi fi-rr-user option-icon icons-spacing"></i>Contact
          
        </a>
        
      </div>
      
      </div>
   
      </div>
  )
}

export default Mobile
