import React, { useState, useContext } from 'react';
import CartProduct from '../components/CartProduct';
import { CartContext } from "../CartContext";
import { Button } from 'react-bootstrap';
const Modal = ({ open, onClose }) => {
    
    const cart = useContext(CartContext);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    if (!open) return null
    return (
        <div onClick={onClose} className="modal_overlay">
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="modalContainer">
                <div className="modalRight">
                    <p onClick={onClose} className="modal_closeBtn">X</p>
                    <div className="modal_content">
                        <h3>Shopping Cart</h3>
                        {productsCount > 0 ?
                            <>
                                <p>Items in your cart:</p>
                                {cart.items.map((currentProduct, idx) => (
                                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                                ))}

                                <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                                <Button variant="success">
                                    Purchase items!
                                </Button>
                            </>
                            :
                            <h1>There are no items in your cart!</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal