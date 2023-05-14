import Products from "./Products";
import SidebarAdmin from "./SidebarAdmin";
import SidebarProducts from "./SidebarProducts";
import '../../style.scss'

function AdminProducts(){
    return(
        <>
            <section className="adminProducts">
                <SidebarAdmin />
                <div className="products-content content">
                    <SidebarProducts />
                    <Products />
                </div>
            </section>
        </>
    )
}
export default AdminProducts;