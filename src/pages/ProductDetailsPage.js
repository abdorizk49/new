import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
// import { useParams } from "react-router-dom";
import "../api/Data.json"

function ProductDetailsPage({productId}){
    // const api_url = "../api/Data.json/products";
    // const [product, setProduct] = useState([]);
    const [product, setProduct] = useState(null);
    // const {productId} = useParams();
    // const getProduct = () => {
    //     fetch(`${api_url}/${productId}`)
    //     .then((res) => res.json())
    //     .then((data) => setProduct(data));
    // }
    

    // useEffect(() => {
    //     getProduct();
    // }, []);

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            // Simulating fetching data from a local file
            const response = await fetch('../api/Data.json');
            const data = await response.json();
            console.log(response);
            // Find the product with the matching ID
            const product = data.products.find((p) => p.id === productId);
            setProduct(product);
          } catch (error) {
            console.error('Error fetching product:', error);
          }
        };
    
        fetchProduct();
      }, [productId]);

    return(
        <>
            <ProductDetails  product={product} />
        </>
    )
}

export default ProductDetailsPage;