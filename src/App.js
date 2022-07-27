import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
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
import Purchase from './Pages/Purchase/Purchase';
import DashboardProflie from './Pages/Dashboard/DashboardProflie';
import DashboardOrders from './Pages/Dashboard/DashboardOrders';

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='portfolio' element={<PortfolioPage />} />
        <Route path='products' element={<ProductPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='signin' element={<SignInPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<DashboardProflie />} />
          <Route path='profile' element={<DashboardProflie />} />
          <Route path='profile' element={<DashboardProflie />} />
          <Route path='orders' element={<DashboardOrders />} />
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
