import React from 'react'
import CV from '../../assets/3.jpeg'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className="btn btn-primary">lets talk</a>
        </div>
    )
}

export default CTA