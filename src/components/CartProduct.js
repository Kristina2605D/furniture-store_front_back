import { useEffect } from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from '../api/furniture';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    console.log(props, 100);
    useEffect(() => {
        props.setProduct(item => {
            return {...item,
                product:{
                title: productData.title,
                price: productData.price,
                quantity: quantity
            }
            }
        })
    }, [])


return (
    <>
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>${(quantity * productData.price).toFixed(2)}</p>
        <button onClick={() => cart.deleteFromCart(id)}>Remove</button>
    </>
)
}

export default CartProduct;