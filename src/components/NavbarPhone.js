import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../img/logo/logo.png'
import '../style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function NavbarPhone() {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Link to='/' className="navbar-brand"><Image src={logo} className="img-fluid" /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to='' className="nav-link">home</Link>
              <Link to='products' className="nav-link">products</Link>
              <Link to="wishlists" className="nav-link">
              <FontAwesomeIcon icon={faHeart} />
                <span>{wishlist.length}</span>
              </Link>
              <Link to='cart' className="nav-link">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{cart.length}</span>
              </Link>
              <Link to='login' className="nav-link">login</Link>
              <Link to='register' className="nav-link">register</Link>
              <Link to='admin' className="nav-link">admin</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPhone;
