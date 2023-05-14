import { Button, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
import { deleteFromWishlist } from "../rtk/slices/wishlist-slice";

function Wishlists() {
  const wishlist = useSelector((state) => state.wishlist);
  console.log(wishlist);
  const dispatch = useDispatch();

//   const [wishlistData, setWishlistData] = useState()
//   const wishlistUrl = 'http://localhost:9000/wishlists'
//   useEffect(() => {
//       getAllWishlist();
//   }, [])

//   const getAllWishlist = () => {
//       fetch(wishlistUrl)
//       .then((res) => res.json())
//       .then((data) => {
//         setWishlistData(data)
//       })
//   }

//   const deleteProduct = (product) => {
//     Swal.fire({
//         title: `Are you sure to Delete ${product.name}?`,
//         showCancelButton: true
//     }).then((data) => {
//         if(data.isConfirmed){
//             fetch(`${wishlistUrl}/${product.id}`, {
//                 method: "DELETE"
//             }).then((res)=> (res).json())
//             .then((data) => {
//                 getAllWishlist(data);
//             })
//         }
//     })
// }


  return (
        <Table striped bordered hover className="my-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><Image src={product.image} alt="" style={{ width: "100px", height: "100px" }} /></td>
                <td>{product.price} E.P</td>
                <td>
                  <Button onClick={() => dispatch(deleteFromWishlist(product))}><span>Delete</span></Button>
                  <Link to={`../products/${product.id}`} className="btn ms-3"><span>View</span></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
  );
}

export default Wishlists;