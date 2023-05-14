
import SidebarAdmin from "./SidebarAdmin";
import SidebarProducts from "./SidebarProducts";
import UpdateProduct from "./UpdateProduct";
import '../../style.scss'

function AdminUpdateProduct(){
    return(
        <>
            <section className="AdminUpdateProduct">
                <SidebarAdmin />
                <div className="products-content content">
                    <SidebarProducts />
                    <UpdateProduct />
                </div>
            </section>
        </>
    )
}
export default AdminUpdateProduct;