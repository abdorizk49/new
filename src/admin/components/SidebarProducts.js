import { Link } from "react-router-dom";
import '../../style.scss'
function SidebarProducts(){
    return(
        <>
            <div className="sidebar-content pt-5 pb-5">
                <ul className="list-unstyled">
                    <li>
                        <Link to={"/admin/products"} className="btn btn-primary text-white">
                            <span>Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/admin/products/add"} className="btn btn-primary text-white">
                            <span>Add Product</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SidebarProducts;