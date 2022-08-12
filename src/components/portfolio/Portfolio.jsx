import React from 'react'
import IMG1 from '../../assets/weather-1.png'
import IMG2 from '../../assets/portfolio-1.png'
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
    title: 'My Portfolio created using ReactJS',
    github: 'https://github.com/FlorinMariusDrilea/FlorinMariusDrilea-portfolio/tree/main/florin-marius-drilea-portfolio',
    demo: IMG2
  },
  {
    id: 3,
    image: IMG1,
    title: 'Project number 3',
    github: 'https://github.com',
    demo: 'image'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Project number 4',
    github: 'https://github.com',
    demo: 'image'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Project number 5',
    github: 'https://github.com',
    demo: 'image'
  },
  {
    id: 6,
    image: IMG1,
    title: 'Project number 6',
    github: 'https://github.com',
    demo: 'image'
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
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Image</a>
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