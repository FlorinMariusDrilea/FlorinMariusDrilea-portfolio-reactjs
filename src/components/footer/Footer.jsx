import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import SIGNATURE from '../../assets/signature.webp'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="#home" className='footer__logo'><img src={SIGNATURE} alt="signature"></img></a>
            
            <ul className="permalinks">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#works">Jobs</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div className="footer__socials">
                <a href="https://www.instagram.com/marius_drilea98/" aria-label="Instagram"><FiInstagram /></a>
                <a href="https://www.linkedin.com/in/florin-marius-drilea/" aria-label="Linkedin"><FaLinkedin /></a>
                <a href="https://github.com/FlorinMariusDrilea" aria-label="Github"><FaGithub /></a>
                <a href="https://twitter.com/DrileaMarius" aria-label="Twitter"><FaTwitter /></a>
            </div>
            
            <div className="footer__copyright">
                <small>&copy; Florin Marius Drilea. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer