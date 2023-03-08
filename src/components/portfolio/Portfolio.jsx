import React from 'react'
import IMG1 from '../../assets/portfolio.webp'
import IMG2 from '../../assets/tinder.jpeg'
import IMG3 from '../../assets/wordle.webp'
import IMG4 from '../../assets/robots.webp'
import IMG5 from '../../assets/football-2.webp'
import IMG6 from '../../assets/linktree.webp'
import IMG7 from '../../assets/kafka-app.jpeg'
import './portfolio.css'

const imageData = [
  {
    id: 1,
    image: IMG1,
    title: 'My Portfolio created using ReactJS framework',
    github: 'https://github.com/FlorinMariusDrilea/FlorinMariusDrilea-portfolio-reactjs',
    demo: 'https://florin-marius-drilea.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'A clone of Tinder Website version with MongoDB',
    github: 'https://github.com/FlorinMariusDrilea/tinder-app-similar/tree/main/tinder-clone-similar',
    demo: "https://tinder-website.netlify.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Simple Romanian Wordle game built with javacsript',
    github: 'https://github.com/FlorinMariusDrilea/wordle-simple-js',
    demo: 'https://wordle-romanian-version.netlify.app'
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
    title: 'Football Clicker game using javascript and html',
    github: 'https://github.com/FlorinMariusDrilea/football-clicker',
    demo: 'https://florinmariusdrilea.github.io/football-clicker/main.html'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Link tree website including my social media',
    github: 'https://github.com/FlorinMariusDrilea/FlorinMariusDrilea-linktree',
    demo: 'https://linktree-florin-marius-drilea.netlify.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Small kafka application to stream data from an input to an output (car - data)',
    github: 'https://github.com/FlorinMariusDrilea/car-data-kafka-streams-springboot',
    demo: ""
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
              <div className='box'>
                <article key={id} className='portfolio__items'>
                  <div className="portfolio__item__image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item__cta">
                    <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                    {demo &&
                      <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Demo</a>}
                  </div>
                </article>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio