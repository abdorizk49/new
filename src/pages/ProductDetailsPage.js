import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";
import {products} from "../api/API"

function ProductDetailsPage(){
    const api_url = "https://646345827a9eead6fae1a476.mockapi.io/products";
    const [products, setProducts] = useState([]);
    const {productId} = useParams();
    const getProduct = () => {
        fetch(`${products}/${productId}`)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
            console.log(data)
        })
    }
    

    useEffect(() => {
        getProduct();
    }, []);


    return(
        <>
            <ProductDetails  product={products} />
        </>
    )
}

export default ProductDetailsPage;