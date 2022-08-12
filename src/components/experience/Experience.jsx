import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
    return (
        <section id="experience">
            <h2>My Experience</h2>
            
            <div className="container experience__container">
                <div className="div experience__backend">
                    <h3>BackEnd Development</h3>
                    <div className="div experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Scala</h4>
                                <small className='text-light'>1+ years experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>3+ years experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>1+ years experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>NodeJS</h4>
                                <small className='text-light'>0-1 years experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>C++</h4>
                                <small className='text-light'>1+ years experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>1+ years experience</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience__frontend'>
                <h3>FrontEnd Development</h3>
                    <div className="div experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>1+ years experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>2+ years experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>2+ years experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>SASS</h4>
                            <small className='text-light'>1+ years experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>Typescript</h4>
                            <small className='text-light'>0-1 years experience</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience