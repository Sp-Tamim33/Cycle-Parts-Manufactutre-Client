import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Overview from '../../Components/Overview/Overview';
import Products from '../../Components/Products/Products';
import Testimonials from '../../Components/Testimonials/Testimonials';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Overview />
            <Products />
            <Testimonials />
            <NewsLetter />
        </div>
    );
};

export default Home;