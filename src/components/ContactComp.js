import React from 'react'
import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
const Contacts = () => {
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
              <p>hasce <br /></p>
            </div>
          </div>
          <div className='box_cont'>
            <div className='icon_cont'><FiPhoneCall /></div>
            <div className='text_cont'>
              <h3>Phone</h3>
              <p> 87484848484<br /></p>
            </div>
          </div>

          <div className='box_cont'>
            <div className='icon_cont'><HiOutlineMailOpen /></div>
            <div className='text_count'>
              <h3>Email</h3>
              <p> wwwwww.@mail.ru<br /></p>
            </div>
          </div>
        </div>
        <div className='contactForm'>
          <form>
            <h2>Send Message</h2>
            <div className='inputBox'>
              <input type='text_count' name='' required />
              <span>Full Name</span>
            </div>
            <div className='inputBox'>
              <input type='text_' name='' required />
              <span>Email</span>
            </div>
            <div className='inputBox'>
              <textarea required></textarea>
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