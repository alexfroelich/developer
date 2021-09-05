import React from 'react';
import './skills.style.css';

var skills = ['HTML5', 'CSS', 'JavaScript', 'Unity', 'ReactJS', 'Swift'];

export const Skills = () => (
    <div>
         <h3 className='skills-title'>My Skills</h3>
    
    <div className='skills-div'>
    
        {skills.map((skill, index)=> (
                <div className='skill'>
                    {skill}
                </div>

          
        
                 ) )}
</div>
    </div>
);