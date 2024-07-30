import React from 'react'
import SocialContact from '../../common/social-contact'
// import React, { useState, useEffect } from 'react';
import './about.css'
import MyComponent from './mycomponent';
import Typewriter from './typewriter'
// import React, { useState, useEffect } from 'react';
const texts = [
  'As a web developer, I have a passion for crafting elegant and functional websites that provide an exceptional user experience. I pride myself on staying up-to-date with the latest technologies and trends in the field, allowing me to create websites that not only look great but also perform at the highest level. My technical skills include proficiency in HTML, CSS, JavaScript, and a variety of modern web development frameworks such as React. I also have experience working with server-side technologies like Node.js '

];
function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hey There , I am <br /><span className='info-name'>Ali Zulfiqar.</span>   <br />
          <span className='web-dev'>
            <div>
              {texts.map((text) => (
                <Typewriter key={text} text={text} />
              ))}
              <MyComponent/>
            </div>

            
          </span>
        </div>
        <div className='about-photo'>

          <img alt='error' src={require("../../../assests/png.png")} className="picture" />

        </div>
      </div>
      <SocialContact />
    </div>
  )
}

export default About
