import React from 'react'
import './Experience.css'
import { BsPatchCheck } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>what skills i have</h5>
      <h2>my experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon' />
              <div>
                <h4>css</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon' />
              <div>
                <h4>bootstarp</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon' />
              <div>
                <h4>mmm</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon' />
              <div>
                <h4>among</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>
        {/* end of frontend */}
        <div className="experience__backend">
          <h3>backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon' />
              <div>
                <h4>nodo</h4>
                <small className='text-light'>mongo</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon' />
              <div>
                <h4>nodo</h4>
                <small className='text-light'>mongo</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon' />
              <div>
                <h4>nodo</h4>
                <small className='text-light'>mongo</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon' />
              <div>
                <h4>nodo</h4>
                <small className='text-light'>mongo</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className='experience__details-icon' />
              <div>
                <h4>nodo</h4>
                <small className='text-light'>mongo</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
