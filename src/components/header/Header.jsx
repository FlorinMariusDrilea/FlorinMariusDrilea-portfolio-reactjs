import React from 'react'
import './header.css'
import ME from '../../assets/image-head-cropped.webp'
import SCROLL from '../../assets/scroll-down.webp'
import CV from './CVButton'
import Socials from './HeaderSocials'

const Header = () => {
    return (
        <header id="home">
            <div className="container header__container">
                    <h1>Hello, my name is</h1>
                    <h1>Florin Marius Drilea</h1>
                    <h1>And I am a</h1>
                    <h1>Software Engineer</h1>
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