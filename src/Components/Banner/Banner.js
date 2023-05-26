import React from 'react';
import Typewriter from 'typewriter-effect';
import './../../Shared/HomePage.css'

const Banner = () => {
    return (
        <div className="w-full h-full banner">
            <div className='ml-5 text-center'>
                <h1 className='text-3xl pt-28 md:text-4xl text-white'>Welcome to.....</h1>
                <h1 className='text-3xl md:text-6xl py-5 font-serif font-semibold navbar-logo-text text-orange-500'>
                    <Typewriter
                        options={{
                            strings: ['Cycle Parts', 'Cycle Tools'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <p className='text-white md:text-xl banner-pera md:w-[800px] md:mx-auto '>
                    There is a lot of technical jargon in the world of bicycles. Simply knowing the basic part names can help clear the air and even make you feel more confident about riding your bike. That’s why we put together an article highlighting all, well almost all, the parts that make up a bicycle. If this sounds like more work than it’s worth just remember that when you’re interested in everything you will never have a dull day.
                </p>
                <button type="button" className="text-orange-500 hover:text-white border-2 border-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-xl px-5 py-2.5 mt-5 duration-500 text-center mr-2 mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-500">See More</button>

            </div>
        </div>
    );
};

export default Banner;