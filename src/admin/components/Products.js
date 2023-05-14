import { Button, Container, Image, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import '../../style.scss'

function Products(){
    const [products, setProducts] = useState()
    const productsUrl = 'http://localhost:9000/products'
    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () => {
        fetch(productsUrl)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
        })
    }

    const deleteProduct = (product) => {
        Swal.fire({
            title: `Are you sure to Delete ${product.name}?`,
            showCancelButton: true
        }).then((data) => {
            if(data.isConfirmed){
                fetch(`${productsUrl}/${product.id}`, {
                    method: "DELETE"
                }).then((res)=> (res).json())
                .then((data) => {
                    getAllProducts(data);
                })
            }
        })
    }

    return(
        <>
            <div className="products-admin pt-5 pb-5">
                <Container>
                    <Table striped bordered hover className="m-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Count</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>
                                        <Image src={product.image} alt="" style={{ width: "50px", height: "50px" }} />
                                    </td>
                                    <td>{product.price} E.P</td>
                                    <td title={product.description}>{product.description.slice(0,50)}...</td>
                                    <td>{product.category}</td>
                                    <td>{product.count}</td>
                                    <td>
                                        <Button className="btn-sm me-2" onClick={() => deleteProduct(product)}>
                                            <span>Delete</span>
                                        </Button>
                                        <Link to={`update/${product.id}`} className="btn btn-primary btn-sm">
                                            <span>Update</span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </>
    )
}

export default Products;