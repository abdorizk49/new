import { Button, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../rtk/slices/cart-slice";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  return (
        <Table striped bordered hover className="my-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><Image src={product.image} alt="" style={{ width: "100px", height: "100px" }} /></td>
                <td>{product.price} E.P</td>
                <td>{product.quantity}</td>
                <td>
                  <Button onClick={() => dispatch(deleteFromCart(product))}><span>Delete</span></Button>
                  <Link to={`../products/${product.id}`} className="btn ms-3"><span>View</span></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
  );
}

export default Cart;
