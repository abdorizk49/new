import Categories from "./Categories";
import SidebarAdmin from "./SidebarAdmin";
import SidebarCategories from "./SidebarCategories";
import '../../style.scss'

function AdminCategories(){
    return(
        <>
            <section className="adminProducts">
                <SidebarAdmin />
                <div className="products-content content">
                    <SidebarCategories />
                    <Categories />
                </div>
            </section>
        </>
    )
}
export default AdminCategories;