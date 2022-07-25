import React from 'react';
import Heading from '../Heading/Heading';
import Testimonial from './Testimonial';
import clientOne from '../../assests/img/clientOne.jpg'
import clientTwo from '../../assests/img/clientTwo.jpg'
import clientThree from '../../assests/img/clientThree.jpg'

const Testimonials = () => {
    return (
        <div>
            <Heading text="What Say Our Clients About Us !" />
            <div className='py-24 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto'>
                <Testimonial img={clientOne} name='Jhon Smith' date='1 Month ago' position='CEO' company='Cycle Builder' text='When it comes to making decisions, we humans aren’t always independent thinkers. From buying our morning coffee to big-ticket items like a new car, we depend on our network’s opinions, advice, or perspectives for making the right decision. ' />
                <Testimonial img={clientTwo} name='Nawani Spark' date='2 Month ago' position='Managar' company='Bike Parts' text='While reviews can accumulate on their own, they shouldn’t exist in a vacuum. Knowing how to ask for reviews, leverage them to get more business, and respond to less-than-favorable customer testimonials can improve your business image and' />
                <Testimonial img={clientThree} name='Rajvir Fahad' date='1 Week ago' position='CEO' company='BiCycle Industry' text='
                Customer reviews build something known as social proof, a phenomenon that states people are influenced by those around them. This might include friends and family, industry experts and influencers, or even internet strangers. '/>
            </div>
        </div>
    );
};

export default Testimonials;