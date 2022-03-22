import React from 'react'
import './about.css'
// import me from '../../assets/me.jpg'
// import { FaAward } from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {vscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Het To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me.image">
            <img src="{me}" alt="About img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              {/* <FaAward className="about__icon" /> */}
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>

            <article className="about__card">
              {/* <FaAward className="about__icon" /> */}
              <h5>clients</h5>
              <small>200+ clients</small>
            </article>

            <article className="about__card">
              {/* <FaAward className="about__icon" /> */}
              <h5>projects</h5>
              <small>80+ projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sint labore deleniti consequuntur ipsum
            laborum ratione qui, quod quas voluptates accusamus! Quos est dolorem reprehenderit ea error, aliquid eum.
          </p>
          {/* <a href="#contact" className="btn btn-primary"></a> */}
        </div>
      </div>
    </section>
  )
}

export default About