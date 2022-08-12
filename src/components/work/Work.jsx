import React from 'react'
import Job1 from '../../assets/sky.png'
import Job2 from '../../assets/thg.webp'
import Job3 from '../../assets/crucible.jpeg'
import Job4 from '../../assets/unicredit.jpeg'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './work.css'
import 'swiper/css'
import 'swiper/css/pagination'

const Work = () => {
    
  const job_data = [
    {
        job: Job1,
        name: "Sky Betting and Gaming",
        role: "Software Engineer",
        years: "10/2021 - present",
        description: "Working in the promotions team using scala and Kafka in an agile environment to maintain and create new applications used in our team to process the data and implement the logic on different promotions. Also being on call for our team, taking care of our services when something goes wrong during out hours."
    },
    {
        job: Job2,
        name: "The Hut Group",
        role: "Graduate Software Engineer",
        years: "02/2021 - 09/2021",
        description: "Worked in the supply and chain team, creating new microservices or updating the existing ones. Also worked in the Fluently team, taking care of the infrastructure and creating new microservices in order to automate the language connect part of the projects using Java Spring Framework."
    },
    {
        job: Job3,
        name: "Crucible",
        role: "Game Server Developer",
        years: "07/2020 - 10/2020",
        description: "Worked on developing different slot games using Java 8 and internal libraries (GDM engine). Also worked on the testing for the slot games that were created in Java."
    },
    {
        job: Job4,
        name: "Unicredit Services",
        role: "Junior Java Developer",
        years: "07/2019 - 10/2019",
        description: "Worked for the creation of a project named Trade Finance OCR, which is an AI solution with a human touch for paperless document handling. TFO uses optical character recognition (OCR) and artificial intelligence (AI) technology to scan trade finance documents during the handling process – reading, classifying and processing them automatically to minimise manual administration."
    }
  ]
    
  return (
    <section id='works'>
        <h2>Jobs</h2>
        <Swiper className="container work__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
            {
                job_data.map(({job, name, role, years, description}, index) => {
                    return(
                        <SwiperSlide key={index} className='work__job'>
                            <div className="job__place">
                                <img src={job} alt={name} />
                            </div>
                            <h3 className='job__name'>{name}</h3>
                            <h5 className='job__role'>{role}</h5>
                            <h4 className='job__years'>{years}</h4>
                            <small className='job__description'>
                                {description}
                            </small>
                        </SwiperSlide>   
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Work
