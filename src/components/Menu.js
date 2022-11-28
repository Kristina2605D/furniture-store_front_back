import React from 'react';
import {Link} from 'react-router-dom';
const Menu = () => {
  return (
    <div className='menu'>
    <h1>LOFT</h1>
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
      <input className='search' type = 'text' placeholder = 'Search' required/>
      </div>
  )
}

export default Menu;