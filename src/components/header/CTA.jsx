import React from 'react'
import CV from '../../assets/Florin_Marius_Drilea.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href ={CV} download className='btn'>Download my CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me!</a>
    </div>
  )
}

export default CTA