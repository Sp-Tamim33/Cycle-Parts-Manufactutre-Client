import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Overview from '../../Components/Overview/Overview';
import Products from '../../Components/Products/Products';
import Testimonials from '../../Components/Testimonials/Testimonials';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <Overview />
            <Products />
            <Testimonials />
            <NewsLetter />
            <Contact />
        </div>
    );
};

export default Home;