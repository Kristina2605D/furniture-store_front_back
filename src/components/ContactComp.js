import React, { useState, useEffect } from 'react';
import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";

const Contacts = () => {
  const [state, setState] = useState('')
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value }
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()


  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
  };
  fetch('http://localhost:5000/message/contact', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));

  
   e.target.reset() 
  }
  return (
    <section className='contact_us'>
      <div className='content_us'>
        <h2>Contact Us</h2>

      </div>
      <div className='container_cont'>
        <div className='contact_info'>
          <div className='box_cont'>
            <div className='icon_cont'><FiMapPin /></div>
            <div className='text_cont'>
              <h3>Address</h3>
              <p>41 Abovyan St. <br /></p>
            </div>
          </div>
          <div className='box_cont'>
            <div className='icon_cont'><FiPhoneCall /></div>
            <div className='text_cont'>
              <h3>Phone</h3>
              <p> 091 11 11 11<br /></p>
            </div>
          </div>

          <div className='box_cont'>
            <div className='icon_cont'><HiOutlineMailOpen /></div>
            <div className='text_count'>
              <h3>Email</h3>
              <p> www.Loft.am<br /></p>
            </div>
          </div>
          <div className='mapContact'>
            <iframe className='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.2258537172954!2d44.51176644019378!3d40.177584282119966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9LCDQkNGA0LzQtdC90LjRjw!5e0!3m2!1sru!2s!4v1671019002916!5m2!1sru!2s" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className='contactForm'>

          <form onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className='inputBox'>
              <input onChange={handleChange} type='text_count' name='fullname' required />
              <span>Full Name</span>
            </div>
            <div className='inputBox'>
              <input onChange={handleChange} type='text_' name='email' required />
              <span>Email</span>
            </div>
            <div className='inputBox'>
              <textarea onChange={handleChange} name='text' required></textarea>
              <span>Type your Message...</span>
            </div>
            <div className='inputBox'>
              <input type='submit' name='' value='Send' />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts;