import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/me.jpg'
import HeaderSocial from '../Header/HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Helle im</h5>
        <h1>hakka biting</h1>
        <h5 ClassName="text-light">Fullstack Developer</h5>
        <CTA />

        <div className="me">
          <img src="../../assets/me.jpg" alt="me" />
        </div>

        <a href="#contact" classame="scroll__down">scroll down</a>
      </div>
    </header>
  )
}

export default Header