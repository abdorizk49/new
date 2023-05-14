import { Button, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import '../../style.scss'

function Categories(){
    const [categories, setCategories] = useState()
    const categoriesUrl = 'http://localhost:9000/categories'
    useEffect(() => {
        getAllCategories();
    }, [])

    const getAllCategories = () => {
        fetch(categoriesUrl)
        .then((res) => res.json())
        .then((data) => {
            setCategories(data)
        })
    }

    const deleteCategory = (category) => {
        Swal.fire({
            title: `Are you sure to Delete ${category.name}?`,
            showCancelButton: true
        }).then((data) => {
            if(data.isConfirmed){
                fetch(`${categoriesUrl}/${category.id}`, {
                    method: "DELETE"
                }).then((res)=> (res).json())
                .then((data) => {
                    getAllCategories(data);
                })
            }
        })
    }

    return(
        <>
            <div className="categories-admin pt-5 pb-5">
                <Container>
                    <Table striped bordered hover className="m-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.map((category) => (
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
                                    <td>
                                        <Button className="btn-sm me-2" onClick={() => deleteCategory(category)}>
                                            <span>Delete</span>
                                        </Button>
                                        <Link to={`update/${category.id}`} className="btn btn-primary btn-sm">
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

export default Categories;