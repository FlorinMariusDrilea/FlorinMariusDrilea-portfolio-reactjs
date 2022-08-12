import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/img1_1.webp'

const About = () => {
    return (
        <section id="about">
            <h2>About me</h2>
            
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me__image">
                        <img src={ME} alt='me' />
                    </div>
                </div>
            
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>2+ years working experience</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Companies</h5>
                            <small>4+ jobs</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Hardworking and team working person, with different experiences during my degree and during my work experience time at the companies in which I was involved. Keen to learn new skills and develop my existing ones while working in a friendly environment.
                    <br />
                    <br />
                        Preferred languages are Scala, Java, Python, C# and Javascript, with additional development experience with Spring, Kafka, ReactJS, Angular, SQL, Docker, building REST services and work with JSON. AGILE-minded engineering professional with a Bachelor's degree in Computer Science at the University of Sheffield.
                    <br />
                    <br />
                        Currently, I am working for Sky Betting & Gaming as a Software Engineer.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About