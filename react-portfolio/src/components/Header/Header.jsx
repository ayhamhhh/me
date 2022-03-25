import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/me.jpg'
import HeaderSocial from "./HeaderSocial"
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Helle i,m</h5>
        <h1>ayham shaker</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">scroll down</a>
      </div>
    </header>
  )
}

export default Header