import React, { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://cycle-tools-server.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Heading text="What Say Our Clients About Us !" />
            <div className='py-24 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto'>
                {
                    [...reviews].reverse().slice(0, 3).map(review => <Testimonial key={review._id} name={review.name} position={review.position} img={review.img} description={review.description} />)
                }
            </div>
        </div>
    );
};

export default Testimonials;