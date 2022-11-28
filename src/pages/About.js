import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const About = () => {
  return (
    <div>
      <Menu />
      <section className='about-us-section'>
        <div className='about-left'>
          <img src='/images/about2.png'></img>
        </div>
        <div className='about-right'>
          <h3>
            About us
          </h3>
          <p className='about-p'><b>All of our furniture uses the best<br />materials and choices for our customers.<br />All of our furniture uses the best materials.</b></p>
          <div className='info-icons'>
            <img src='/images/pictures1.svg'></img>

            <div> <h4>Best Quality</h4>
              <p>All of our furniture uses the best materials and choices</p>
            </div>
          </div>

          <div className='info-icons'>
            <img src='/images/pictures2.svg'></img>
            <div>
              <h4>100% Secure</h4>
              <p>All of our furniture uses the best materials and choices</p>
            </div>
          </div>

          <div className='info-icons'>
            <img src='/images/pictures3.svg'></img>
            <div>
            <h4>Free Shoping</h4>
            <p>All of our furniture uses the best materials and choices</p></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>


  )
}

export default About;
