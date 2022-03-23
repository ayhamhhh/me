import React from 'react'
import './Experience.css'
import {BsPatchCheck} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>what skills i have</h5>
      <h2>my experience</h2>

      <div className="container experience__container">
        <div className="experience__fronted">
          <h3>frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheck />
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className="experience__details">
              <BsPatchCheck />
              <h4>css</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className="experience__details">
              <BsPatchCheck />
              <h4>javascript</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className="experience__details">
              <BsPatchCheck />
              <h4>bootstrap</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className="experience__details">
              <BsPatchCheck />
              <h4>tawilwind</h4>
              <small className='text-light'>Experience</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">

        </div>
      </div>
    </section>
  )
}

export default Experience
