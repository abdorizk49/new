import { Link } from "react-router-dom";
import '../../style.scss'
function SidebarCategories(){
    return(
        <>
            <div className="sidebar-content pt-5 pb-5">
                <ul className="list-unstyled">
                    <li>
                        <Link to={"/admin/categories"} className="btn btn-primary text-white">
                            <span>Categories</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/admin/categories/add"} className="btn btn-primary text-white">
                            <span>Add Category</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SidebarCategories;