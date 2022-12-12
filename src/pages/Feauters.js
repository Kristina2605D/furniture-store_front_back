import { useState, useContext } from 'react';
import Products from '../components/Products';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { CartContext } from "../CartContext";
import Modal from '../components/Modal';
import { SlBasket } from 'react-icons/sl';
const Feauters = () => {
  const cart = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false)
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <div>
      <div className='feauters_menu'>
        <Menu />
        <button className='modalBtn' onClick={() => setOpenModal(true)}><SlBasket/> {productsCount} Items</button>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <Products />
      <Footer />
    </div>
  )
}

export default Feauters;