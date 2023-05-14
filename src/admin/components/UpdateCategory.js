import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../../style.scss'

function UpdateCategory(){
    const categoriesUrl = 'http://localhost:9000/categories'
    let {productId} = useParams()
    const [name , setName] = useState('')
    let navigate = useNavigate();



    const formSubmit = (e) => {
        e.preventDefault();
        axios({
          method: "PUT",
          url: `${categoriesUrl}/${productId}`,
          data: {
            name
          },
        }).then((data) => {
          console.log(data);
          navigate("/admin/categories");
        });
      };


    return(
        <>
            <section className="addCategory forms pt-5 pb-5 w-100">
                <Container>
                    <h3>Update Category {productId} </h3>
                    <Form className="row" onSubmit={formSubmit}>
                        <Col className="col-md-12">
                            <Form.Group className="mb-3" controlId="formBasicCategoty">
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Category Name"
                                        className="ps-3 pe-5"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col className="col-md-12 justify-content-center d-flex">
                            <Button variant="" type="submit">
                                <span>Update</span>
                            </Button>
                        </Col>
                    </Form>
                </Container>
            </section>
        </>
    )
}
export default UpdateCategory;