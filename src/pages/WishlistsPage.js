import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Wishlists from "../components/Wishlists";
import { clearWishlist } from "../rtk/slices/wishlist-slice";

function WishlistsPage(){
const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
    return(
        <>
            <section className="cart pt-5 pb-5">
                <Container>
                    <Row>
                        <Col className="col-lg-12 col-md-12">
                            <div className="head-section">
                                <h2>Wishlist</h2>
                            </div>
                        </Col>
                        <Col className="col-lg-12 col-md-12">
                            <Wishlists />
                            <Button onClick={() => dispatch(clearWishlist())}>
                                <span>Clear Wishlist</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default WishlistsPage;