import React from 'react';
import '../../Shared/HomePage.css'

const Heading = ({ text }) => {
    return (
        <div className='section-heading-parent'>
            <h1 className='text-4xl text-center text-white font-sans font font-semibold section-heading'>{text}</h1>
        </div>
    );
};

export default Heading;