import React from 'react'
import CV from '../../assets/Florin_Drilea_CV_UK.pdf'

const CVButton = () => {
  return (
    <div className="cv">
        <a href ={CV} download className='btn'>Download my CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me!</a>
    </div>
  )
}

export default CVButton