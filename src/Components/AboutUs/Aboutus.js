import React from 'react';
import aboutus from '../../assests/img/aboutus.svg'

const Aboutus = () => {
    return (
        <div>
            <div className="hero h-[800px]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={aboutus} className="max-w-[200px] md:max-w-md rounded-lg shadow-2xl" alt='aboutus' />
                    <div className='md:ml-20'>
                        <h1 className="text-3xl md:text-5xl font-bold">About Cycle Parts</h1>
                        <p className="py-6 w-md text-sm md:text-md">
                            Welcome to our premier cycle manufacturer website! Here, we take pride in providing an exceptional online platform dedicated to showcasing our wide range of high-quality bicycles. Whether you're an avid cyclist or a casual rider, our website is designed to cater to all your cycling needs.
                            As you explore our website, you'll discover a comprehensive collection of bicycles that are expertly crafted with precision and innovation. We offer a diverse selection of bikes, ranging from mountain bikes and road bikes to hybrid bikes and electric bikes, ensuring there's a perfect fit for every type of rider.</p>
                        <button className="hover:text-orange-500 bg-orange-500 text-white font-bold border-2 border-orange-500 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-500 rounded-lg text-xl px-5 py-2.5 mt-5 duration-500 text-center mr-2 mb-2 dark:border-orange-500 dark:text-white  dark:hover:bg-orange-200 dark:focus:ring-orange-500">Know More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Aboutus;