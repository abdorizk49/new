
import SidebarAdmin from "./components/SidebarAdmin";
import '../style.scss'

function AdminPage(){
    return(
        <>
            <section className="adminPage">
                <SidebarAdmin />
            </section>
        </>
    )
}

export default AdminPage;