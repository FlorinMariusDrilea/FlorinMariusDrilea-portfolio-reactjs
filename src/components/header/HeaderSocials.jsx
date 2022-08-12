import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/florin-marius-drilea/" target="_blank" rel="noreferrer" aria-label="Linkedin`"><BsLinkedin /></a>
      <a href="https://github.com/FlorinMariusDrilea?tab=repositories" target="_blank" rel="noreferrer" aria-label="Github"><BsGithub /></a>
      <a href="https://www.instagram.com/marius_drilea98/" target="_blank" rel="noreferrer" aria-label="Instagram"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials
