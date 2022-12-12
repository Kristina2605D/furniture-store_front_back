import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';


const Menu = () => {
 
  return (
    <>
      <Navbar expand='sm' className='menu'>
        <Navbar.Brand className='logo' href="/">Loft</Navbar.Brand>
        
        <nav>
          <ul className='menu-wrapper' >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/feauters'>Feauters</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className='register_button'>
          <Link to = '/register'>Register</Link>
          <span>/</span>
          <Link to = '/login'>Log in</Link>
        </div>
        
      </Navbar>
      
    </>
  )
}

export default Menu;