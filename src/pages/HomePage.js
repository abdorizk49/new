import Features from "../components/Features";
import Products from "../components/Products";
import Slider from "../components/Slider";

function HomePage(){
    return(
        <>
            <Slider />
            <Features />
            <Products showButton={true} />
        </>
    )
}

export default HomePage;