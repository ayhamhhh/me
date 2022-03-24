import React, {useState} from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'Active' : ''}
            ><AiOutlineHome /></a>
            <a href='#About' onClick={() => setActiveNav('#about')} className={activeNav === '#About' ?
                'active' : ''}><AiOutlineUser /></a>
            <a href='#Experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#Experience' ?
                'active' : ''}><BiBook /></a>
            <a href='#Contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#Contact' ?
                'active' : ''}><RiServiceLine /></a>
            <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#Services' ?
                'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav