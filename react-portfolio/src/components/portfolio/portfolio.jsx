import React from 'react'
import './Portfolio.css'
import IMG2 from '../../assets/2.jpeg'
import IMG3 from '../../assets/3.jpeg'
import IMG4 from '../../assets/4.jpeg'
import IMG5 from '../../assets/5.png'
import IMG6 from '../../assets/6.png'
import IMG7 from '../../assets/7.jpeg'


const data = [
  {
    id: 1,
    Image: IMG2,
    title: "ANY THING",
    github: "https//github.com",
    demo: "https://dribbble.com/Aline_pixels"
  },
  {
    id: 2,
    Image: IMG3,
    title: "ANY THING",
    github: "https//github.com",
    demo: "https://dribbble.com/Aline_pixels"
  },
  {
    id: 3,
    Image: IMG4,
    title: "ANY THING",
    github: "https//github.com",
    demo: "https://dribbble.com/Aline_pixels"
  },
  {
    id: 4,
    Image: IMG5,
    title: "ANY THING",
    github: "https//github.com",
    demo: "https://dribbble.com/Aline_pixels"
  },
  {
    id: 5,
    Image: IMG6,
    title: "ANY THING",
    github: "https//github.com",
    demo: "https://dribbble.com/Aline_pixels"
  },
  {
    id: 6,
    Image: IMG7,
    title: "ANY THING",
    github: "https//github.com",
    demo: "https://dribbble.com/Aline_pixels"
  },
]


const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, Image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={Image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn bin-primary' target="_blank">live demo</a>
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