import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>EGATOR</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#Experience'>Experience</a></li>
                <li><a href='#services'>services</a></li>
                <li><a href='#Portfolio'>Portfolio</a></li>
                <li><a href='#Testimonials'>Testimonials</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='http://facebook.com'><FaFacebookSquare /></a>
                <a href='http://instagram.com'><FaInstagram /></a>
                <a href='http://twitter.com'><AiFillTwitterSquare /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; EGATOR Tutorials. All rights reserved</small>
            </div>
        </footer>
    )
}
export default Footer
