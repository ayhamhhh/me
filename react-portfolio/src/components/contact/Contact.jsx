import React from 'react'
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { SiMessenger } from 'react-icons/si'
import { RiWhatsappFill } from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ayhamhhh', 'template_4m2tdn8', form.current, 'bUz-CApmONv4e_KUz')

    e.target.reset()
  };

  return (
    <section id='Contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hhhhhhhh@gmail.com</h5>
            <a href='mailto:hhhhhhhhhh@gmail.com' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <SiMessenger className='contact__option-icon' />
            <h4>messenger</h4>
            <h5>hhhhhhh</h5>
            <a href='http://m.me/4eveCosmeticseg' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon' />
            <h4>whats app</h4>
            <h5>+12331231231231</h5>
            <a href='https://whatsapp.com/send?phone=+123456789' target="_blank">Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='your full name' required />
          <input type="email" name='email' placeholder='your email' required />
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>send massger</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
