import React from 'react';
import './projects.style.css';

export const Projects = ({title, description, keywords, image, link, id}) => (
     <div className='projects-main-div '>
       
         
           
            <div class="container center-aligned">
            <img className='project-image image' src={image} alt="projectImage" width="600" height="auto" />
            <div className='text'>
                <h4 >{title}</h4>
                <div >{description}</div>
                </div>
            </div>
       
       
    </div>
);