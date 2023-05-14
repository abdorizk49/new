import { Col, Container, Row } from "react-bootstrap";
import "../style.scss";
import Register from "../components/Register";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      <section className="forms register-page">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-md-8">
              <Row>
                <Col className="col-md-12">
                  <div className="head-section">
                    <h4> Register </h4>
                    <p>
                      If you have an account with us, please login at&nbsp;
                      <Link to="/login">Login Page</Link>.
                    </p>
                  </div>
                </Col>
              </Row>
              <Register />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default RegisterPage;
