import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Button from "./Button";
function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  const initialOptions = {
    "client-id": process.env.REACT_APP_CLIENT_ID,
    currency: "USD",
    intent: "capture",
    components: "buttons",
};
  console.log(cart.items);
  return (
    <div className="box_list">
      <div className="image_wrapper">
        <img src={product.imgUrl} alt="img" />
      </div>
      <div className="box_info">
        <h3 className='title_h3'>{product.title}</h3>
        <div className="price">
          <span> {product.price}$</span>

          {productQuantity > 0 ? (
            <>
              <form>
                <label className="label">In Cart: {productQuantity}</label>

                <button
                  onClick={(e) => {
                    e.preventDefault()
                    cart.addOneToCart(product.id)
                  }}
                  className="addPlus"
                >
                  +
                </button>
                <button
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="removebtn "
                >
                  -
                </button>
              </form>
              <div>
                <PayPalScriptProvider options={initialOptions}>
                  <Button product={product} />
                </PayPalScriptProvider>
              </div>
              <button
                onClick={() => cart.deleteFromCart(product.id)}
                className="deletebtn"
              >
                Remove from cart
              </button>
            </>)
            :
            (
              <button
                className="buy"
                variant="primary"
                onClick={() => cart.addOneToCart(product.id)}
              >
                Add To Cart
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

