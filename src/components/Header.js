import Menu from './Menu';
import { BsSearch } from 'react-icons/bs';
function Header() {
  return (
    <header className='header'>

      <Menu />
      <div className='hero'>
        
        <div className='hero-text'>
          <h3>We Help You Make Modern Furniture</h3>
          <p> We will help you to make an elegant
            and luxurious interior designed by
            professional interior designer.
          </p>
          </div>
          <div className='image-wrapper'><img src='/images/headerImg.png'></img></div>   
      </div>
   
    </header>
  );
}

export default Header;