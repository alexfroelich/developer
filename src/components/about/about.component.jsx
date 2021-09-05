import React from 'react';
import { Skills } from '../skills/skills.component';
import './about.style.css'


export const About = ({profilePhoto}) => (

    <div className='about-div'>
        <div className='name-div'>
       
            <h1 className='name'>Alexander Froelich</h1>
        </div>
        <div className='content-about'>
        
            <div>
                <img src={profilePhoto} alt="profilephoto" className='profile-photo'/>
                </div>
                {/* <Skills/> */}
            {/* </div> */}
            <div className='presentation-div'>
                
                Hi, my name is Alexander! My journey into programming started in 2009 when I started learning C++. In 2013 I was selected for ADA (Apple Developer Academy), and continued my path
                studying <span>iOS</span> development. Lastly, for the past 4 years, I've been studying <span>front-end</span> and <span>game</span> development.
                
                <Skills/>
               
            </div>
            
           
        </div>
        </div>
  
       
   
);