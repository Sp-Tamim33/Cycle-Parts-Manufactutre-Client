import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../assests/img/notFoundError.svg'

const NF404 = () => {
    return (
        <div>
            <h1 className='text-4xl text-center mt-10 text-orange-500 font-semibold'>Page Not Found !</h1>
            <div className='mt-10 md:mt-0'>
                <img className='mx-auto md:w-[500px]' width={1100} src={notFoundImg} alt="" />
            </div>
            <Link
                to="/"
                className="text-white bg-black hover:text-black hover:bg-orange-500 md:ml-[690px] px-3 py-2 rounded-md text-xl font-semibold border-2 border-orange-500 duration-500"
            >
                Go Back
            </Link>
        </div>
    );
};

export default NF404;