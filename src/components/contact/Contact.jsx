import { React, useRef } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = () => {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_bm4vcql', 'template_adpcv7p', form.current, 'user_ug48gVlKhZb8pjDFyeV14')
        alert("Message submitted!")
        e.target.reset()
    };
    
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        < MdOutlineEmail className='contact__option__icon'/>
                        <h4>Email</h4>
                        <h5>marius.drilea2016@gmail.com</h5>
                        <a href="mailto:marius.drilea2016@gmail.com" target="_blank" rel="noreferrer">Contact me by email!</a>
                    </article>
                    <article className="contact__option">
                        < BsWhatsapp className='contact__option__icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+447716312297</h5>
                        <a href="https://wa.me/+447716312297" target="_blank" rel="noreferrer">Contact me by phone!</a>
                    </article>
                </div>
                <form ref={form} id="form" onSubmit={sendEmail}>
                    <input id='name' type='name' name='name' placeholder='Your Name' required pattern='(^[a-zA-Z][a-zA-Z\s]{0,40}[a-zA-Z]$)'/>
                    <input id='email' type='email' name='email' placeholder='Your Email' required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' />
                    <textarea name='message' rows="10" placeholder='Write here' required />
                    <button className="button-pushable">
                        <span className="button-shadow"></span>
                        <span className="button-edge"></span>
                        <span className="button-front">Send</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact