import {React} from 'react';
import './project.style.css';

export const Project = ({title, description, keywords, id}) => (
    <div className='project-card'>
    <div className='card-text'>
        <h3 className='card-title'>{title}</h3>
        <p className = 'card-description'>{description}</p>
        </div>
        {/* {keywords.map((keyword, index)=> (
            <p className = 'card-keywords'>{keyword}</p>
           
          
          ) )} */}
        <p className = 'card-keywords'>{keywords}</p>
    </div>
);