import React, {useState} from 'react';
import { Project } from './components/project/project.component';
import { Projects } from './components/projects/projects.component';
import { About } from './components/about/about.component';
import { Header } from './components/header/Header.component';
import { Contact } from './components/contact/contact.component';
// import alessandraSite from './assets/alessandra-site.png';
// import aleSite from './assets/aleSite.png';
// import webSiteImage from './assets/website1.png';
// import alexanderPortfolio from './assets/alexanderPortfolio.png';
// import portfolioGames from './assets/portfolio-games.png';
// import portfolioMobile from './assets/portfolio-mobile.png';
import shoppingList from './assets/shoppingList.png';
import loginForm from './assets/form.png';

import aleSite2 from './assets/aleSite2.png';

import alexanderGamePortfolio from './assets/alexanderGamePortfolio.png';

import weatherMontreal from './assets/weatherMontreal.png';
import pokedex from './assets/pokedex.png';
import profilePhoto from './assets/profile.png';

import './App.css';


function App() {
 
  const [projects, setProjects] = useState([
    {
      title: 'My Game Developer Portfolio',
      description: 'Website that shows my game related projects. The responsive layout was developed using CSS (grid and flexbox) and JavaScript',
      keywords: 'HTML5, CSS, JavaScript, Responsive, PHP',
      image: alexanderGamePortfolio,
      link: 'https://alexfroelich.github.io/portfolio',
      
    },
    {
      title: 'Website - Alessandra Froelich',
      description: 'Website developed for Psycologist Alessandra Froelich-Cim. The responsive layout was developed using CSS (grid and flexbox) and JavaScript',
      keywords: 'HTML5, CSS, JavaScript, Responsive, PHP',
      image: aleSite2,
      link: 'https://www.alessandrafroelich.ca'
      
    },
    {
      title: 'Shopping List',
      description: 'A shopping list that you can add item and also set the quantity. You can touch the item to mark it as purchased and also delete items.',
      keywords: 'ReactJS, CSS',
      image:  shoppingList,
      link:'https://alexfroelich.github.io/ShoppingList'
      
    },
    {
      title: 'Weather App',
      description: 'A Weather App where you search for a location and it shows the weather in that place. This project uses data from the OpenWeatherMap API',
      keywords: 'ReactJS, CSS, API, JSON',
      image:  weatherMontreal,
      link:'https://alexfroelich.github.io/ShoppingList'
      
    },
    {
      title: 'Pokedex',
      description: 'A Pokedex! You search for for a pokemon by name in the search box. This project uses data from the PokeAPI.',
      keywords: 'ReactJS, CSS, API, JSON',
      image:  pokedex,
      link:'https://alexfroelich.github.io/ShoppingList'
      
    },
    {
      title: 'Login Sample',
      description: 'A login form sample, developed using HTML5 and CSS',
      keywords: 'HTML5, CSS',
      image:  loginForm,
      link:'https://codepen.io/alexfroelich/full/jOmaNwR'
    }
    
  ]);


  return (
    <div className="App">
     
      {/* <Header/> */}
      <About className="about" profilePhoto={profilePhoto}/>
      <div>
        <h1 className='projects-title'>Projects</h1>
        <p>Here you can check my projects</p>
      </div>
      <div className='content'>
        
        
          <div className='projects'>
         
          {projects.map((project, index)=> (
            <Project title={project.title} description={project.description} keywords={project.keywords} id={index}/>
           
          
          ) )}
          </div>
         
      </div>
     
      
      <Contact/>
      {/* <h1 className='projects-title'> </h1> */}
    </div>
  );
}

export default App;
/*
 <Projects title={project.title} description={project.description}
            keywords={project.keywords} image={project.image} link={project.link}
            id={index}  
            />
*/