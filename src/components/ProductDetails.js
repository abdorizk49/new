import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, minusQuantity, plusQuantity } from "../rtk/slices/cart-slice";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { addToWishlist } from "../rtk/slices/wishlist-slice";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function ProductDetails(props){
    const { product } = props;
    const products = useSelector((state) => state.products);
    const cart = useSelector((state) => state.cart);
    console.log(products);
    const dispatch = useDispatch();

    const quantity = cart.reduce((acc, product) => {
        acc = product.quantity;
        return acc;
    }, 0);
  
    // const wishlistsUrl = 'http://localhost:9000/wishlists'
    // const [name , setName] = useState('')
    // const [image , setImage] = useState('')
    // const [price , setPrice] = useState('')
    // const [wishlistsData, setWishlistsData] = useState()

    // useEffect(() => {
    //     getAllWishlists();
    // }, [])

    // const getAllWishlists = () => {
    //     fetch(wishlistsUrl)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setWishlistsData(data)
    //     })
    // }


    // const addWishlist = (e) => {
    //     e.preventDefault();
    //     axios({
    //         method: 'POST',
    //         url: wishlistsUrl,
    //         data: {
    //             name: product.name,
    //             image: product.image,
    //             price: product.price
    //         }
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     })
    // }


    return(
        <>
            <section className="productDetails pt-5 pb-5">
                <Container>
                    <Row>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <div className="img-product mb-4">
                                <Image src={product.image} alt="" className="img-fluid w-100" />
                            </div>
                        </Col>
                        <Col className="col-lg-6 col-md-6 col-sm-12">
                            <div className="details-product">
                                <div className="head-details">
                                    <h3>{product.name}</h3>
                                    <h5> {product.price} E.P </h5>
                                    <div className="cart-qty">
                                        <div className="cartBtn">
                                            <Button onClick={() => dispatch(addToCart(product))}>
                                                <span> Add to Cart </span>
                                            </Button>
                                        </div>
                                        <div className="qty">
                                            <button onClick={() => dispatch(minusQuantity(product))}>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>
                                            <div>{quantity}</div>
                                            <button onClick={() => dispatch(plusQuantity(product))}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                        </div>
                                        <div className="wishlists">
                                            <button onClick={() => dispatch(addToWishlist(product))}>
                                                <FontAwesomeIcon icon={faHeart} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-details">
                                    <h6> Category: {product.category}</h6>
                                    <p>{product.description}</p>
                                </div>
                                <div className="foot-details">
                                    <p>SHARE:</p>
                                    <ul className="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <Link to="#">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                            <FontAwesomeIcon icon={faTwitter} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProductDetails;