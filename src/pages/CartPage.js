import { Button, Col, Container, Row } from "react-bootstrap";
import Cart from "../components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../rtk/slices/cart-slice";

function CartPage(){
    
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

    return(
        <>
            <section className="cart pt-5 pb-5">
                <Container>
                    <Row>
                        <Col className="col-lg-12 col-md-12">
                            <div className="head-section">
                                <h2>Cart</h2>
                            </div>
                        </Col>
                        <Col className="col-lg-12 col-md-12">
                            <Cart />
                            <Button onClick={() => dispatch(clear())}>
                                <span>Clear Cart</span>
                            </Button>
                            <h5 className="mt-4"> Total Price: {totalPrice.toFixed(2)} E.P</h5>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CartPage;