import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Overview from '../../Components/Overview/Overview';
import Products from '../../Components/Products/Products';
import Testimonials from '../../Components/Testimonials/Testimonials';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Overview />
            <Products />
            <Testimonials />
            <NewsLetter />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;