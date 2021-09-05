import {React} from 'react';
import './contact.style.css';

export const Contact = () => (
    <div className='contact-div'>
        <h1 className = 'contact-title'>Contact</h1>
            <div className='contact-content'>
              
           
           
                <div>
                    <h1 className='contact-name'> Alexander Froelich</h1>
                    <label><span>Front End | Unity</span></label>
                </div>
                    <div>
                        <p className='contact-email'>alexfroelich05@gmail.com</p>
                    </div>

                <div className='contact-items'>
                    <p className='contact-text contact-link'>Resume</p>
                    <p className='contact-text contact-link'>LinkedIn</p>
                    <p className='contact-text contact-link'>CodePen</p>
                    {/* <p className='contact-text contact-link'>Twitter</p> */}
                </div>
          
           </div>
        
    </div>
);