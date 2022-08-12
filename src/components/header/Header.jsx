import React from 'react'
import './header.css'
import ME from '../../assets/img1-low.png'
import SCROLL from '../../assets/scroll-down.png'
import CTA from './CTA'
import Socials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, my name is</h5>
                <h1 className="text-light">Florin Marius Drilea</h1>
                <h5>And I am a</h5>
                <h5>Software Engineer</h5>
                <Socials />
                <CTA />
                <div className="me">
                    <img src={ME} alt="me" />    
                </div>
                
                <a href="#contact" className='scroll__down'>
                    <img src={SCROLL} alt="scroll_down_arrow" />
                </a>
            </div>
        </header>
    )
}

export default Header