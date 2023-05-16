import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";
import { products } from "../api/API"

function ProductDetailsPage(){
    // const api_url = "https://646345827a9eead6fae1a476.mockapi.io/products";
    // const [product, setProduct] = useState([]);
    // const {productId} = useParams();
    // const getProduct = () => {
    //     fetch(`${products}/${productId}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setProduct(data)
    //         console.log(data)
    //     })
    // }
    // useEffect(() => {
    //     getProduct();
    // }, []);

    const [product, setProduct] = useState(null);
    const { productId } = useParams();
  
    useEffect(() => {
      const getProduct = () => {
        const selectedProduct = products.find((product) => product.id === Number(productId));
        if (selectedProduct) {
          setProduct(selectedProduct);
        }
      };
  
      getProduct();
    }, [productId]);


    return(
        <>
            {product ? (
                <ProductDetails product={product} />
                ) : (
                <p>Product not found.</p>
            )}
        </>
    )
}

export default ProductDetailsPage;