import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Overview from '../../Components/Overview/Overview';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Overview />
        </div>
    );
};

export default Home;