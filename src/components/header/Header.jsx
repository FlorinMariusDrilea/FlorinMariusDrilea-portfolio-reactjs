import React from 'react'
import './header.css'
import ME from '../../assets/img1-low.webp'
import SCROLL from '../../assets/scroll-down.webp'
import CV from './CVButton'
import Socials from './HeaderSocials'

const Header = () => {
    return (
        <header id="home">
            <div className="container header__container">
                <h1>Hello, my name is</h1>
                <h1 className="text-light">Florin Marius Drilea</h1>
                <h5>And I am a</h5>
                <h5>Software Engineer</h5>
                <Socials />
                <CV />
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