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
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='portfolio' element={<PortfolioPage />} />
        <Route path='products' element={<ProductPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='signin' element={<SignInPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='*' element={<NF404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
