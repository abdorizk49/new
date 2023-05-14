import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";
// import Products from "../components/Products";

function ProductDetailsPage(){
    const api_url = "http://localhost:9000/products";
    const [product, setProduct] = useState([]);
    const params = useParams();
    const getProduct = () => {
        fetch(`${api_url}/${params.productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
    useEffect(() => {
        getProduct();
    }, []);
    return(
        <>
            <ProductDetails  product={product} />
            {/* <Products homePage={true} /> */}
        </>
    )
}

export default ProductDetailsPage;