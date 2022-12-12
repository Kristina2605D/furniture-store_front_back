import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return (
        <Card className = 'box_list'>
            <Card.Body>
                <div className='image_wrapper'>
                    <img src={product.imgUrl} alt='img' />
                </div>
                <div className='box_info'>
                    <h3>{product.title}</h3>
                    <div className='price'><span>Price {product.price}$</span>
                        {productQuantity > 0 ?
                            <>
                                <Form as={Row}>
                                    <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                                    <Col sm="6">
                                        <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                        <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                                    </Col>
                                </Form>
                                <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                            </>
                            :
                            <Button className='buy' variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                        }
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;
