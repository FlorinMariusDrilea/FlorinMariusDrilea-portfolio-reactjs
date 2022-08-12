import React from 'react'
import IMG1 from '../../assets/weather-1.webp'
import IMG2 from '../../assets/portfolio.webp'
import IMG3 from '../../assets/wordle.webp'
import IMG4 from '../../assets/robots.webp'
import IMG5 from '../../assets/football.webp'
import IMG6 from '../../assets/calculator.webp'
import './portfolio.css'

const imageData = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather Show using API with javascript',
    github: 'https://github.com/FlorinMariusDrilea/weather-api-javascript',
    demo: IMG1
  },
  {
    id: 2,
    image: IMG2,
    title: 'My Portfolio created using ReactJS framework',
    github: 'https://github.com/FlorinMariusDrilea/FlorinMariusDrilea-portfolio/tree/main/florin-marius-drilea-portfolio',
    demo: IMG2
  },
  {
    id: 3,
    image: IMG3,
    title: 'Simple Romanian Wordle game built with javacsript',
    github: 'https://github.com/FlorinMariusDrilea/wordle-simple-js',
    demo: IMG3
  },
  {
    id: 4,
    image: IMG4,
    title: 'RobotFriends search engine using ReactJS',
    github: 'https://github.com/FlorinMariusDrilea/robots',
    demo: 'https://florinmariusdrilea.github.io/robots/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Football Clicker using javascript, html and css',
    github: 'https://github.com/FlorinMariusDrilea/football-clicker',
    demo: 'https://florinmariusdrilea.github.io/football-clicker/main.html'
  },
  {
    id: 6,
    image: IMG6,
    title: 'A simple Python calculator using PySimpleGUI library',
    github: 'https://github.com/FlorinMariusDrilea/python-calculator',
    demo: IMG6
  }
]

function Portfolio() {
  return(
    <section id="portfolio">
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          imageData.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item__cta">
                  <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Image/Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio