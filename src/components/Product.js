import { useEffect, useState } from "react";
import { Card, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product() {
    const [products, setProducts]= useState()

    const productsUrl = "http://localhost:9000/products";
    useEffect(() => {
        getAllProducts();
    }, []);
  
    const getAllProducts = () => {
      fetch(productsUrl)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        });
    };

    if (!products) {
        return (
          <Col className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center mt-4">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        );
      }
    
    const fourProducts = products.slice(0, 4)


    const productData =  fourProducts?.map((product) => {
        return(
            <Col className="col-lg-3 col-md-3 col-sm-6 col-xs-6" key={product.id}>
                <Card className="product mb-3">
                    <div className="card-head">
                        <Card.Img src={product.image} alt="" className="img-fluid"/>
                        <div className="category-product">{product.category}</div>
                    </div>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text title={product.description}>{product.description}</Card.Text>
                        <div className="price-count">
                            <span>price: <strong>{product.price}</strong> </span>
                            <span>count: <strong>{product.count}</strong></span>
                        </div>
                        <Link to={`../products/${product.id}`} className="btn"> <span>Add to Cart</span> </Link>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

  return (
    <>
        {productData}
    </>
  );
}

export default Product;
