import { Link } from "react-router-dom";
import '../../style.scss'
function SidebarAdmin(){
    return(
        <>
        <div className="sidebar pt-5 pb-5">
            <ul className="list-unstyled d-flex">
                <li>
                    <Link to={"/admin/products"} className="btn btn-primary text-white">
                        <span>Products</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/admin/categories"} className="btn btn-primary text-white">
                        <span>Categories</span>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )
}
export default SidebarAdmin;