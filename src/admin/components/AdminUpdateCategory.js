
import SidebarAdmin from "./SidebarAdmin";
import SidebarCategories from "./SidebarCategories";
import UpdateCategory from "./UpdateCategory";
import '../../style.scss'

function AdminUpdateCategory(){
    return(
        <>
            <section className="AdminUpdateProduct">
                <SidebarAdmin />
                <div className="products-content content">
                    <SidebarCategories />
                    <UpdateCategory />
                </div>
            </section>
        </>
    )
}
export default AdminUpdateCategory;