import AddProduct from "./AddProducts";
import SidebarAdmin from "./SidebarAdmin";
import SidebarProducts from "./SidebarProducts";
import '../../style.scss'

function AdminAddProduct(){
    return(
        <>
            <section className="addProduct">
                <SidebarAdmin />
                <div className="products-content content">
                    <SidebarProducts />
                    <AddProduct />
                </div>
            </section>
        </>
    )
}
export default AdminAddProduct;