
import AddCategory from "./AddCategory";
import SidebarAdmin from "./SidebarAdmin";
import SidebarCategories from "./SidebarCategories";
import '../../style.scss'

function AdminAddCategory(){
    return(
        <>
            <section className="addProduct">
                <SidebarAdmin />
                <div className="products-content content">
                    <SidebarCategories />
                    <AddCategory />
                </div>
            </section>
        </>
    )
}
export default AdminAddCategory;