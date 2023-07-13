import React from 'react';
import tribe from '../../assests/img/tribe.jpg'
import indus from '../../assests/img/indus.jpg'
import figo from '../../assests/img/figo.jpg'
import Heading from '../Heading/Heading';

const Text = () => {
    return (
        <div>
            <Heading text={"Our Branding"} />
            <div className='grid grid-cols-1 md:grid-cols-3 py-10'>
                <img className='max-w-sm mx-auto rounded-xl hover:scale-110 delay-150 ease-in-out transition' src={tribe} alt="" />
                <img className='max-w-sm mx-auto rounded-xl hover:scale-110 delay-150 ease-in-out transition' src={indus} alt="" />
                <img className='max-w-sm mx-auto rounded-xl hover:scale-110 delay-150 ease-in-out transition' src={figo} alt="" />
            </div>
            <div className='px-32'>
                <h1 className='text-3xl'>Shop Cycle from BD's Most Trusted Cycle Brand - Cycle Parts</h1>
                <p>Welcome to our premier cycle manufacturer website, where innovation meets excellence in the world of cycling! We are passionate about crafting high-quality bicycles that offer the perfect blend of performance, style, and durability.

                    Our website showcases an extensive range of meticulously designed cycles, catering to riders of all ages and skill levels. Whether you're a professional athlete, a recreational rider, or a commuter seeking a reliable and efficient mode of transportation, we have the ideal bicycle for you.

                    As you explore our website, you'll discover an intuitive and user-friendly interface that makes browsing our collection a breeze. Our comprehensive categorization allows you to quickly narrow down your search based on your specific requirements, whether it's mountain bikes, road bikes, hybrid bikes, electric bikes, or kids' bikes.

                    Each product page provides detailed information about the featured cycle, including its specifications, key features, and unique selling points. Our website also offers high-resolution images and 360-degree views, enabling you to examine every aspect of the bicycle before making a purchase decision.

                    To ensure that you make an informed choice, we have a dedicated section for customer reviews and ratings. Here, you can gain valuable insights from fellow cyclists who have already experienced the thrill of our bikes firsthand. We take pride in our customers' satisfaction and continuously strive to improve our products based on their feedback.

                    Our website goes beyond just showcasing our products. It also serves as a comprehensive resource hub for cycling enthusiasts. You'll find a wealth of informative articles, guides, and tutorials on various topics, including cycling techniques, maintenance tips, and the latest industry trends. Whether you're a beginner or a seasoned rider, our website is your go-to destination for all things cycling.

                    When you're ready to make a purchase, our streamlined and secure online ordering system ensures a smooth and hassle-free transaction. We offer convenient payment options and reliable shipping services, ensuring that your dream bike reaches your</p>
            </div>
        </div>
    );
};

export default Text;