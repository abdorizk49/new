import { Outlet, Route, Routes } from 'react-router-dom';
import NavbarPhone from './components/NavbarPhone';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import WishlistsPage from './pages/WishlistsPage';
import AdminPage from './admin/AdminPage';
import AdminProducts from './admin/components/AdminProducts';
import AdminCategories from './admin/components/AdminCategories';
import AdminAddProduct from './admin/components/AdminAddProduct';
import AdminAddCategory from './admin/components/AdminAddCategory';
import AdminUpdateProduct from './admin/components/AdminUpdateProduct';
import AdminUpdateCategory from './admin/components/AdminUpdateCategory';

function App() {
  return (
    <div className="App">
      <NavbarPhone />
      <Routes>
        <Route path='' element={<HomePage />} ></Route>
        <Route path='products' element={<ProductsPage />} ></Route>
        <Route path='products/:productId' element={<ProductDetailsPage />}></Route>
        <Route path='wishlists' element={<WishlistsPage />}></Route>
        <Route path='admin' element={<Outlet />}>
          <Route path='' element={<AdminPage />}></Route>
          <Route path='products' element={<Outlet />}>
            <Route path='' element={<AdminProducts />}></Route>
            <Route path='add' element={<AdminAddProduct />}></Route>
            <Route path='update/:productId' element={<AdminUpdateProduct />}></Route>
          </Route>
          <Route path='categories' element={<Outlet />} >
            <Route path='' element={<AdminCategories />}></Route>
            <Route path='add' element={<AdminAddCategory/>}></Route>
            <Route path='update/:productId' element={<AdminUpdateCategory />}></Route>
          </Route>
        </Route>
        <Route path='cart' element={<CartPage />} ></Route>
        <Route path='login' element={<LoginPage />} ></Route>
        <Route path='register' element={<RegisterPage />} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
