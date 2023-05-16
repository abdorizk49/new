import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";

function ProductDetailsPage(){
    const api_url = "https://646345827a9eead6fae1a476.mockapi.io/products";
    const [product, setProduct] = useState([]);
    const {productId} = useParams();
    const getProduct = () => {
        fetch(`${api_url}/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
    

    useEffect(() => {
        getProduct();
    }, []);


    return(
        <>
            <ProductDetails  product={product} />
        </>
    )
}

export default ProductDetailsPage;