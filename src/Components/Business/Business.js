import React from 'react';
import business1 from '../../assests/img/business1.jpg'
import business2 from '../../assests/img/business2.jpg'
import business3 from '../../assests/img/business3.jpg'
import business4 from '../../assests/img/business4.jpg'
import Heading from '../Heading/Heading';

const Business = () => {
    return (
        <div>
            <Heading text={"Explore Business"} />
            <div className='grid grid-cols-1 md:grid-cols-4 py-32'>
                <div className="card w-72 md:w-80 mx-auto shadow-xl image-ful border-2 border-orange-500">
                    <div className="card-body">
                        <h2 className="card-title text-white">Bicycle</h2>
                        <p>Full bicycle manufacturing facilities for exporting to the European market.</p>
                    </div>
                    <figure><img src={business1} alt="business 1" /></figure>
                </div>
                <div className="card w-72 md:w-80 mx-auto shadow-xl image-ful border-2 border-orange-500">
                    <div className="card-body">
                        <h2 className="card-title text-white">Tyres</h2>
                        <p>Full range of tire manufacturing facilities</p>
                    </div>
                    <figure><img src={business2} alt="business 1" /></figure>
                </div>
                <div className="card w-72 md:w-80 mx-auto shadow-xl image-ful border-2 border-orange-500">
                    <div className="card-body">
                        <h2 className="card-title text-white">Components</h2>
                        <p>Full bicycle components manufacturing facilities.</p>
                    </div>
                    <figure><img src={business3} alt="business 1" /></figure>
                </div>
                <div className="card w-72 md:w-80 mx-auto shadow-xl image-ful border-2 border-orange-500">
                    <div className="card-body">
                        <h2 className="card-title text-white">Automotive</h2>
                        <p>Sole importer and distributor of BMW and KIA in Bangladesh.</p>
                    </div>
                    <figure><img src={business4} alt="business 1" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Business;