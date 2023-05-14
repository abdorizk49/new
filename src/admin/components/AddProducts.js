import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style.scss";

function AddProduct() {
  const productsUrl = "http://localhost:9000/products";
  const categoriesUrl = "http://localhost:9000/categories";
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(0);
  let navigate = useNavigate();
  const [categoriesData, setcategoriesData] = useState();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    fetch(categoriesUrl)
      .then((res) => res.json())
      .then((data) => {
        setcategoriesData(data);
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: productsUrl,
      data: {
        name,
        image,
        price,
        description,
        category,
        count,
      },
    }).then((data) => {
      console.log(data);
      navigate("/admin/products");
    });
  };

  const dataList = categoriesData?.map((category) => {
    return (
      <option value={category.name} key={category.id}>
        {category.name}
      </option>
    );
  });
  return (
    <>
      <section className="addProduct forms pt-5 pb-5 w-100">
        <Container>
          <h3>Add New Product</h3>
          <Form className="row" onSubmit={formSubmit}>
            <Col className="col-md-6 col-sm-6 col-xs-12">
              <Form.Group className="mb-3" controlId="ProductName">
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="ProductName"
                    aria-describedby="Product Name"
                    placeholder="Product Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col className="col-md-6 col-sm-6 col-xs-12">
              <Form.Group className="mb-3" controlId="ProductImage">
                <InputGroup className="mb-3">
                  <Form.Control
                    type="url"
                    className="form-control"
                    id="ProductImage"
                    aria-describedby="Product Image"
                    placeholder="Product Image"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col className="col-md-12 col-sm-6 col-xs-12">
              <Form.Group className="mb-3" controlId="ProductDescription">
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="ProductDescription"
                    aria-describedby="Product Description"
                    placeholder="Product Description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col className="col-md-4 col-sm-6 col-xs-12">
              <Form.Group className="mb-3" controlId="ProductPrice">
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    className="form-control"
                    id="ProductPrice"
                    aria-describedby="Product Price"
                    placeholder="Product Price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col className="col-md-4 col-sm-6 col-xs-12">
              <Form.Group className="mb-3" controlId="ProductCategory">
                <InputGroup className="mb-3">
                  <Form.Control
                    className="form-control"
                    id="ProductCategory"
                    aria-describedby="Product Category"
                    list="datalistOptions"
                    placeholder="Product Category"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <datalist id="datalistOptions">{dataList}</datalist>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col className="col-md-4 col-sm-6 col-xs-12">
              <Form.Group className="mb-3" controlId="ProductCount">
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    className="form-control"
                    id="ProductCount"
                    aria-describedby="Product Count"
                    placeholder="Product Count"
                    onChange={(e) => setCount(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col className="col-md-12 justify-content-center d-flex">
              <Button variant="" type="submit">
                <span>Add Product</span>
              </Button>
            </Col>
          </Form>
        </Container>
      </section>
    </>
  );
}
export default AddProduct;
