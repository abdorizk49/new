import { Col, Container, Row } from "react-bootstrap";
import '../style.scss'
import { Link } from "react-router-dom";
import Login from "../components/Login";

function LoginPage(){
    return (
        <>
          <section className="forms login-page">
            <Container>
              <Row className="justify-content-center">
                <Col className="col-md-6">
                  <Row>
                    <Col className="col-md-12">
                      <div className="head-section">
                        <h4> Login </h4>
                        <p>
                          If you don't have an account with us, please register at&nbsp;
                          <Link to='/register'>Register Page</Link>.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Login />
                </Col>
              </Row>
            </Container>
          </section>
        </>
      );
}

export default LoginPage;