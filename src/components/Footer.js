import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGooglePlusG, faInstagram, faFacebookF, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
      <footer className="pt-5 pb-5">
        <Container>
          <div className="content-footer text-center">
            <h3>PhOne</h3>
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
                  <FontAwesomeIcon icon={faGooglePlusG} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </li>
              <li>
                <Link to="#">
                <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </li>
              <li>
                <Link to="#">
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
            </ul>
            <p>
                PhOne © 2023. all right reserved, developed by 
                <Link to="/"> <strong>A. RIZK</strong> </Link>
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
