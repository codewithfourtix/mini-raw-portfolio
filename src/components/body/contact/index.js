import React from 'react'
import SocialContact from '../../common/social-contact'
import Separator from '../../common/social-contact/seperator'
import './contact.css'
function Contact() {
  return (
    <div className='contact'>
      <Separator/>
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact/>
        </div>
        <div className='download'>
          <a download href={require('../../../assests/resume.txt')}>
          <i class="fi fi-rr-cloud-download-alt download-icon">
            Resume Download
          </i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
