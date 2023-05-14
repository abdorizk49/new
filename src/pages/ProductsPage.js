import { Col, Container, Row } from "react-bootstrap";
import AllProducts from "../components/AllProducts";


function ProductsPage(props){
    // const { product, showButton } = props;
    return(
        <>
            <section className="products pt-5 pb-5">
                <Container>
                    <Row>
                        <Col className="col-lg-12 col-md-12 col-sm-12">
                            <div className="head-section text-center">
                                <h2>Phones</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Col>
                        <AllProducts />
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProductsPage;