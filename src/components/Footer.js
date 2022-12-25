import React from 'react'
import {BsFacebook, BsGithub} from 'react-icons/bs';
import {FiTwitter, FiInstagram} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    
    <footer className='footer'>

 		<div className= "container">
			<div className="row">
				<div className="footer-col">
					<h4>LOFT</h4>
<p className="about">Furniture provides comfort at home while letting us express our personal style, so it’s as much about form as function.</p>
				</div>
				<div className="footer-col">
					<h4>take a tour</h4>
					<ul>
						<li><Link to = '/feauters'>Features</Link></li>
						<li><Link to = '/feauters'>Pricing</Link></li>
						<li><Link to = '/feauters'>Product</Link></li>
						
					</ul>
				</div>
				<div className="footer-col">
					<h4>Our company</h4>
					<ul>
					<li><Link to = '/about'>About Us</Link></li>
						<li><a href="#">Media</a></li>
						<li><Link to = '/contact'>Contact Us</Link></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>Subscribe</h4>
					<div className="social-links">
						
            <a href="https://www.facebook.com/" target="_blank"><BsFacebook/></a>
						<a href="https://twitter.com/" target="_blank"><FiTwitter/></a>
						<a href="https://www.instagram.com/" target="_blank"><FiInstagram/></a>
            <a href="https://github.com/" target="_blank"><BsGithub/></a>
					</div>
				</div>
			</div>
		</div>
		<div className="footerContainer">
			<p className="copyright">Copyright @ 2022. Crafted with love.</p>
		</div>
    </footer>

  )
}

export default footer;