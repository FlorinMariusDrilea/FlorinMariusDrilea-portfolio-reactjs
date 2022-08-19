import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { MdWorkOutline, MdOutlineLaptopChromebook } from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNavi] = useState('#')
    return (
        <nav>
            <a href="#home" onClick={() => setActiveNavi('#')} className={activeNav === '#' ? 'active' : ''} title="Home"><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNavi('#about')} className={activeNav === '#about' ? 'active' : ''} title="About me"><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNavi('#experience')} className={activeNav === '#experience' ? 'active' : ''} title="Skills"><MdOutlineLaptopChromebook /></a>
            <a href="#works" onClick={() => setActiveNavi('#work')} className={activeNav === '#work' ? 'active' : ''} title="Work"><MdWorkOutline /></a>
            <a href="#portfolio" onClick={() => setActiveNavi('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} title="Portfolio"><BiBook /></a>
            <a href="#contact" onClick={() => setActiveNavi('#contact')} className={activeNav === '#contact' ? 'active' : ''} title="Contact"><BiMessageSquareDetail /></a>
            
        </nav>
    )
}

export default Nav