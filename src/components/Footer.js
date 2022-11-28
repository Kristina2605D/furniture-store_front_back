import React from 'react'
import {BsFacebook, BsGithub} from 'react-icons/bs';
import {FiTwitter, FiInstagram} from 'react-icons/fi';


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
						<li><a href="#">Features</a></li>
						<li><a href="#">Pricing</a></li>
						<li><a href="#">Product</a></li>
						<li><a href="#">Support</a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>Our company</h4>
					<ul>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Media</a></li>
						<li><a href="#">Contact Us</a></li>
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