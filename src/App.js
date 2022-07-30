import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/Contact/ContactPage';
import HomePage from './Pages/Home/HomePage';
import PortfolioPage from './Pages/Portfolio/PortfolioPage';
import ProductPage from './Pages/Product/ProductPage';
import SignInPage from './Pages/SignIn/SignInPage';
import SignUpPage from './Pages/SignUp/SignUpPage';
import Footer from './Components/Footer/Footer'
import NF404 from './Components/NotFound/NF404';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Toaster } from 'react-hot-toast';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import RequireAdmin from './Components/RequireAdmin/RequireAdmin';
import Purchase from './Pages/Purchase/Purchase';
import DashboardProflie from './Pages/Dashboard/DashboardProflie';
import DashboardOrders from './Pages/Dashboard/DashboardOrders';
import AddRivew from './Pages/Dashboard/AddRivew';
import AllUsers from './Pages/Dashboard/AllUsers';
import AddProduct from './Pages/Dashboard/AddProduct';
import Header from './Components/Header/Header';
import AddBlog from './Pages/Dashboard/AddBlog';
import Blogs from './Pages/Blog/Blogs';
import SingleBlog from './Pages/Blog/SingleBlog';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Header />
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='portfolio' element={<PortfolioPage />} />
        <Route path='products' element={<ProductPage />} />
        <Route path='blog' element={<Blogs />} />
        <Route path='blog/:id' element={<SingleBlog />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='signin' element={<SignInPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<DashboardProflie />} />
          <Route path='profile' element={<DashboardProflie />} />
          <Route path='addrivew' element={<AddRivew />} />
          <Route path='orders' element={<DashboardOrders />} />
          <Route path='orders/order/:id' element={<Payment />} />
          <Route path='allusers' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
          <Route path='addproduct' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path='addblog' element={<RequireAdmin><AddBlog /></RequireAdmin>} />
        </Route>
        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path='*' element={<NF404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
